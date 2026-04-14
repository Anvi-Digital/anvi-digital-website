import Mailjet from "node-mailjet";
import { EmailResponse, SendEmailParams } from "./email.types";

// Simple email service class
export class EmailService {
  private mailjet: Mailjet;
  private fromEmail: string;
  private fromName: string;
  private toEmail: string;
  private toName: string;

  constructor() {
    const apiKey = process.env.MAILJET_API_KEY;
    const apiSecret = process.env.MAILJET_SECRET_KEY;

    this.fromEmail = process.env.FROM_EMAIL || "";
    this.fromName = process.env.FROM_NAME || "";
    this.toEmail = process.env.TO_EMAIL || "";
    this.toName = process.env.TO_NAME || "";

    // Only throw if we are actually trying to send, or just warn/initialize safely
    if (!apiKey || !apiSecret) {
      console.warn(
        "MAILJET_API_KEY and MAILJET_SECRET_KEY are missing. Email service will not work.",
      );
      // We initialize with empty strings to avoid crash on startup, methods will fail if called
      this.mailjet = new Mailjet({ apiKey: "dummy", apiSecret: "dummy" });
    } else {
      this.mailjet = new Mailjet({
        apiKey,
        apiSecret,
      });
    }
  }

  async sendEmail(params: SendEmailParams): Promise<EmailResponse> {
    try {
      const { subject, textContent, htmlContent, attachments } = params;

      const apiKey = process.env.MAILJET_API_KEY;
      if (!apiKey) {
        throw new Error("MAILJET_API_KEY is not configured");
      }

      const message: any = {
        From: {
          Email: this.fromEmail,
          Name: this.fromName,
        },
        To: [
          {
            Email: params.to || this.toEmail,
            Name: this.toName, // Default TO_NAME
          },
        ],
        Subject: subject,
        TextPart: textContent,
        HTMLPart: htmlContent,
      };

      // Add attachments if provided
      if (attachments && attachments.length > 0) {
        message.Attachments = attachments.map((attachment) => ({
          ContentType: attachment.contentType,
          Filename: attachment.filename,
          Base64Content: attachment.base64Content,
        }));
      }

      const mailjetRequest = {
        Messages: [message],
      };

      const result = await this.mailjet
        .post("send", { version: "v3.1" })
        .request(mailjetRequest);

      if (result.response.status === 200) {
        const responseBody = result.body as any;
        return {
          success: true,
          messageId:
            responseBody?.Messages?.[0]?.To?.[0]?.MessageID?.toString(),
        };
      } else {
        return {
          success: false,
          error: `Email sending failed: ${result.response.status}`,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown email error",
      };
    }
  }
}
