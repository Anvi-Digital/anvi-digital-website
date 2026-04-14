"use client";

import { useState, useCallback } from "react";
import { httpService } from "../services/http/http.service";
import { useReCaptcha } from "./useReCaptcha";

interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

interface FormSubmissionOptions {
  endpoint: string;
  onSuccess?: (data: unknown) => void;
  onError?: (error: string) => void;
  recaptchaLoadOnMount?: boolean;
}

// Custom hook following SRP - manages form submission with reCAPTCHA integration
export const useFormSubmission = (options: FormSubmissionOptions) => {
  const { endpoint, onSuccess, onError, recaptchaLoadOnMount = true } = options;

  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const {
    executeReCaptcha,
    resetReCaptcha,
    isLoading: isRecaptchaLoading,
    loadReCaptchaScript,
  } = useReCaptcha("contact", recaptchaLoadOnMount);

  const submitForm = useCallback(
    async (formData: Record<string, unknown>) => {
      setState((prev) => ({
        ...prev,
        isSubmitting: true,
        error: null,
        isSuccess: false,
      }));

      try {
        let recaptchaToken: string | null = null;

        // Get reCAPTCHA token if required - executeReCaptcha handles 'mock-token-dev-mode' logic internally if configured
        recaptchaToken = await executeReCaptcha();

        if (!recaptchaToken) {
          throw new Error("reCAPTCHA verification failed");
        }

        // Prepare submission data
        const submissionData = {
          ...formData,
          ...(recaptchaToken && { recaptchaToken }),
        };

        // Submit form
        const response = await httpService.post(endpoint, {
          data: JSON.stringify(submissionData),
        });

        setState((prev) => ({ ...prev, isSubmitting: false, isSuccess: true }));

        // Reset reCAPTCHA for next submission
        resetReCaptcha();

        onSuccess?.(response);

        return response;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";

        setState((prev) => ({
          ...prev,
          isSubmitting: false,
          error: errorMessage,
        }));

        // Reset reCAPTCHA on error
        resetReCaptcha();

        onError?.(errorMessage);
        throw error;
      }
    },
    [endpoint, executeReCaptcha, resetReCaptcha, onSuccess, onError],
  );

  const resetForm = useCallback(() => {
    setState({
      isSubmitting: false,
      isSuccess: false,
      error: null,
    });

    resetReCaptcha();
  }, [resetReCaptcha]);

  return {
    ...state,
    isLoading: state.isSubmitting || isRecaptchaLoading,
    submitForm,
    resetForm,
    prepareForm: loadReCaptchaScript,
  };
};
