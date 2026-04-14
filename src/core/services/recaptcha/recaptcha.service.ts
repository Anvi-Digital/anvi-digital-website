import {
  ReCaptchaVerificationResponse,
  ReCaptchaVerificationResult,
} from "./recaptcha.types";
import { httpService } from "../http/http.service";

// Simple reCAPTCHA service class
export class ReCaptchaService {
  constructor(
    private scoreThreshold: number = 0.5,
    private secretKey: string = process.env.RECAPTCHA_SECRET_KEY || "",
  ) {}

  async verifyToken(token: string): Promise<ReCaptchaVerificationResult> {
    try {
      // Basic token validation
      if (!token || token.length < 10) {
        return {
          success: false,
          score: 0,
          message: "Invalid token",
          errors: ["INVALID_TOKEN"],
        };
      }

      // Verify with Google using HTTP service
      const params = new URLSearchParams({
        secret: this.secretKey,
        response: token,
      });

      // Use HTTP service to verify with Google
      const data = await httpService.post<ReCaptchaVerificationResponse>(
        `https://www.google.com/recaptcha/api/siteverify?${params}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      // Process the response
      const success = Boolean(data.success);
      const score = Number(data.score) || 0;
      const errorCodes = Array.isArray(data["error-codes"])
        ? data["error-codes"]
        : undefined;

      if (!success) {
        return {
          success: false,
          score,
          message: "Verification failed",
          errors: errorCodes || ["VERIFICATION_FAILED"],
        };
      }

      // Check score threshold
      const isScoreValid = score >= this.scoreThreshold;

      return {
        success: isScoreValid,
        score,
        message: isScoreValid ? "Verification successful" : "Score too low",
        errors: isScoreValid ? undefined : ["LOW_SCORE"],
      };
    } catch (error) {
      return {
        success: false,
        score: 0,
        message: "Verification error",
        errors: ["INTERNAL_ERROR"],
      };
    }
  }
}

export const recaptchaService = new ReCaptchaService();
