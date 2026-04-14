"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { ReCaptchaHookState } from "../services/recaptcha/recaptcha.types";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
      reset: () => void;
    };
  }
}

// Custom hook following SRP - manages reCAPTCHA state and operations
export const useReCaptcha = (
  action: string = "submit",
  loadOnMount: boolean = true,
) => {
  const [state, setState] = useState<ReCaptchaHookState>({
    isLoading: false,
    token: null,
    error: null,
    isExpired: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [siteKey, setSiteKey] = useState<string | null>(null);

  // Load reCAPTCHA script
  const loadReCaptchaScript = useCallback(() => {
    if (typeof window === "undefined" || !siteKey) {
      return;
    }

    const existingScript = document.querySelector('script[src*="recaptcha"]');
    if (existingScript) {
      // If script exists but grecaptcha is not available, there might be a loading error
      if (!window.grecaptcha) {
        existingScript.remove();
        // Continue with script creation
      } else {
        return;
      }
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      setState((prev) => ({
        ...prev,
        error: "Failed to load reCAPTCHA script",
      }));
    };

    document.head.appendChild(script);
  }, [siteKey]);

  // Execute reCAPTCHA
  const executeReCaptcha = useCallback(async (): Promise<string | null> => {
    if (typeof window === "undefined" || !siteKey) {
      // Don't fail if we're in dev and no key is provided (mock mode could return a dummy token)
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "ReCaptcha site key missing in dev. Returning mock token.",
        );
        return "mock-token-dev-mode";
      }

      setState((prev) => ({
        ...prev,
        error: "reCAPTCHA not available - missing site key",
      }));
      return null;
    }

    // Attempt to load script if not present
    if (!window.grecaptcha) {
      loadReCaptchaScript();

      let attempts = 0;
      const maxAttempts = 50; // 5 seconds total wait time

      while (!window.grecaptcha && attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        attempts++;
      }

      if (!window.grecaptcha) {
        setState((prev) => ({
          ...prev,
          error: "reCAPTCHA script failed to load",
        }));
        return null;
      }
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(siteKey, { action })
            .then(resolve)
            .catch(reject);
        });
      });

      setState((prev) => ({
        ...prev,
        isLoading: false,
        token,
        isExpired: false,
      }));

      // Set expiration timer (tokens expire after 2 minutes)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setState((prev) => ({ ...prev, isExpired: true, token: null }));
      }, 110000); // 1 minute 50 seconds to be safe

      return token;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "reCAPTCHA execution failed";
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      return null;
    }
  }, [action, siteKey, loadReCaptchaScript]);

  // Reset reCAPTCHA
  const resetReCaptcha = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setState({
      isLoading: false,
      token: null,
      error: null,
      isExpired: false,
    });

    // Only reset if grecaptcha is available and has been properly initialized
    if (typeof window !== "undefined" && window.grecaptcha) {
      try {
        window.grecaptcha.reset();
      } catch (error) {
        // Silently ignore reset errors - this can happen if no clients exist
        // Only log in development mode
        if (process.env.NODE_ENV === "development") {
          console.warn(
            "reCAPTCHA reset failed (this is normal if no clients exist):",
            error,
          );
        }
      }
    }
  }, []);

  // Initialize site key
  useEffect(() => {
    // Get site key from environment variables (client-side only)
    if (typeof window !== "undefined") {
      const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (key) {
        setSiteKey(key);
      } else {
        if (process.env.NODE_ENV !== "development") {
          setState((prev) => ({
            ...prev,
            error: "reCAPTCHA site key not found in environment variables",
          }));
        }
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Load script when site key is available and loadOnMount is true
  useEffect(() => {
    if (siteKey && loadOnMount) {
      loadReCaptchaScript();
    }
  }, [siteKey, loadReCaptchaScript, loadOnMount]);

  return {
    ...state,
    executeReCaptcha,
    resetReCaptcha,
    loadReCaptchaScript,
  };
};
