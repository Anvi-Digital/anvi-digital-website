import { NextRequest, NextResponse } from "next/server";
import { recaptchaService } from "../../../core/services/recaptcha/recaptcha.service";
import { EmailService } from "../../../core/services/email/email.service";
import { ValidationUtils } from "../../../core/utils/validation.utils";
import { ContactFormEmailTemplateService } from "../../../core/services/emailTemplates/contactFormEmailTemplate.service";

interface ContactFormData {
  message: string;
  full_name: string;
  work_email: string;
  recaptchaToken?: string;
}

// API route handles contact form submissions with reCAPTCHA & validation
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { message, full_name, work_email, recaptchaToken } = body;

    // Validate required fields
    if (!ValidationUtils.isValidString(message)) {
      return NextResponse.json(
        { success: false, message: "Message is required" },
        { status: 400 },
      );
    }

    if (!ValidationUtils.isValidString(full_name)) {
      return NextResponse.json(
        { success: false, message: "Full name is required" },
        { status: 400 },
      );
    }

    if (!ValidationUtils.isValidEmail(work_email)) {
      return NextResponse.json(
        { success: false, message: "Valid work email is required" },
        { status: 400 },
      );
    }

    // Verify reCAPTCHA
    if (recaptchaToken) {
      // In development, if secret key is missing, mock validation if token matches dev mock
      if (
        process.env.NODE_ENV === "development" &&
        recaptchaToken === "mock-token-dev-mode"
      ) {
        console.warn(
          "Skipping ReCaptcha validation in Development mode with mock token.",
        );
      } else {
        const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (!recaptchaSecretKey) {
          console.error("RECAPTCHA_SECRET_KEY is not set");
          return NextResponse.json(
            { success: false, message: "Server configuration error" },
            { status: 500 },
          );
        }

        const verification = await recaptchaService.verifyToken(recaptchaToken);

        if (!verification.success) {
          return NextResponse.json(
            {
              success: false,
              message: "reCAPTCHA verification failed",
              errors: verification.errors,
            },
            { status: 400 },
          );
        }
      }
    } else if (process.env.NODE_ENV !== "development") {
      // Enforce token in production
      return NextResponse.json(
        { success: false, message: "reCAPTCHA token is missing" },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      message: ValidationUtils.sanitizeString(message),
      full_name: ValidationUtils.sanitizeString(full_name),
      work_email: ValidationUtils.sanitizeString(work_email),
    };

    // Prepare email data
    const emailData = {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || undefined,
    };

    try {
      const emailService = new EmailService();
      const emailTemplateService = new ContactFormEmailTemplateService();

      const template =
        emailTemplateService.generateUserEnquiryTemplate(emailData);

      const emailResult = await emailService.sendEmail(template);

      if (!emailResult.success) {
        console.error("Email service failed:", emailResult.error);
        return NextResponse.json(
          {
            success: false,
            message:
              "Message received but email delivery failed. We will contact you manually.",
          },
          { status: 500 },
        );
      }
    } catch (emailError) {
      console.error("Email sending exception:", emailError);
      return NextResponse.json(
        {
          success: false,
          message:
            "Message received but email delivery failed. We will contact you manually.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while sending your message",
      },
      { status: 500 },
    );
  }
}
