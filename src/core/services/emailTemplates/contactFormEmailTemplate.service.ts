interface ContactEmailData {
  message: string;
  full_name: string;
  work_email: string;
  timestamp: string;
  userAgent?: string;
}

export class ContactFormEmailTemplateService {
  generateUserEnquiryTemplate(data: ContactEmailData): {
    subject: string;
    htmlContent: string;
    textContent: string;
  } {
    const subject = `New Inquiry from Anvi Digital: ${data.full_name}`;

    const textContent = `
New Contact Form Submission - Anvi Digital

Full Name: ${data.full_name}
Work Email: ${data.work_email}

Message:
${data.message}

Timestamp: ${data.timestamp}
User Agent: ${data.userAgent || "Unknown"}
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px; }
    .header { background-color: #000; color: #fff; padding: 20px; border-bottom: 1px solid #eee; margin-bottom: 20px; text-align: center; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; }
    .value { margin-top: 5px; font-size: 15px; }
    .footer { margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 10px; }
    .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #000; margin-top: 5px; white-space: pre-wrap; font-style: italic; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin:0; letter-spacing: 2px;">ANVI DIGITAL</h2>
      <p style="margin:5px 0 0 0; font-size: 14px; opacity: 0.8;">New Contact Form Submission</p>
    </div>
    
    <div class="field">
      <div class="label">Full Name:</div>
      <div class="value">${this.escapeHtml(data.full_name)}</div>
    </div>
    
    <div class="field">
      <div class="label">Work Email:</div>
      <div class="value"><a href="mailto:${this.escapeHtml(data.work_email)}">${this.escapeHtml(data.work_email)}</a></div>
    </div>

    <div class="field">
      <div class="label">Project Details / Message:</div>
      <div class="message-box">${this.escapeHtml(data.message)}</div>
    </div>
    
    <div class="footer">
      <p>Timestamp: ${data.timestamp}<br>
      User Agent: ${this.escapeHtml(data.userAgent || "Unknown")}</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    return { subject, htmlContent, textContent };
  }

  private escapeHtml(unsafe: string): string {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
