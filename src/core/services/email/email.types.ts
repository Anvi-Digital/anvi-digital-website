export interface EmailAttachment {
  filename: string;
  contentType: string;
  base64Content: string;
}

export interface SendEmailParams {
  to?: string; // Optional override
  subject: string;
  textContent?: string;
  htmlContent?: string;
  attachments?: EmailAttachment[];
}

export interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}
