export interface ReCaptchaVerificationResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

export interface ReCaptchaVerificationResult {
  success: boolean;
  score: number;
  message: string;
  errors?: string[];
}

export interface ReCaptchaHookState {
  isLoading: boolean;
  token: string | null;
  error: string | null;
  isExpired: boolean;
}
