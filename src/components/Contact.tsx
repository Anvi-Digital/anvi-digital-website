"use client";

import React, { useState } from "react";
import PageContainer from "./PageContainer";
import { useFormSubmission } from "../core/hooks/useFormSubmission";

interface IFormData {
  full_name: string;
  work_email: string;
  message: string;
}

interface IFormErrors {
  full_name?: string;
  work_email?: string;
  message?: string;
  general?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<IFormData>({
    full_name: "",
    work_email: "",
    message: "",
  });

  const [errors, setErrors] = useState<IFormErrors>({});

  const {
    submitForm,
    isLoading: isSubmitting,
    isSuccess,
    error: submissionError,
    prepareForm,
  } = useFormSubmission({
    endpoint: "/api/contact",
    onSuccess: () => {
      setFormData({
        full_name: "",
        work_email: "",
        message: "",
      });
      setErrors({});
    },
    onError: (error) => {
      setErrors((prev) => ({ ...prev, general: error }));
    },
    recaptchaLoadOnMount: false,
  });

  const validateForm = (): boolean => {
    const newErrors: IFormErrors = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }

    if (!formData.work_email.trim()) {
      newErrors.work_email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.work_email)) {
      newErrors.work_email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof IFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    if (errors.general) {
      setErrors((prev) => ({ ...prev, general: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await submitForm({ ...formData });
  };

  return (
    <PageContainer
      id="contact"
      className="bg-on-background text-surface"
      suppressHydrationWarning
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Column — Headline & Info */}
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
            READY TO BUILD GROWTH THAT
            <br />
            COMPOUNDS?
          </h2>
          <p className="text-2xl text-surface/60 mb-12">
            Let&apos;s build a system that brings in leads without relying on
            guesswork.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                mail
              </span>
              <a
                href="mailto:growth@anvi.digital"
                className="text-xl hover:text-secondary transition-colors"
              >
                hello@anvidigital.com.au
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                location_on
              </span>
              <span className="text-xl">
                18 Australis St, Campbelltown NSW 2560, Australia
              </span>
            </div>
          </div>
        </div>

        {/* Right Column — Form */}
        <div className="relative">
          {isSuccess ? (
            <div className="h-full flex flex-col justify-center items-center text-center p-8 border-2 border-secondary/20 bg-secondary/5">
              <h3 className="text-4xl font-black uppercase mb-4 text-secondary">
                Sent Successfully
              </h3>
              <p className="text-xl text-surface/60">
                Thank you for reaching out. We&apos;ll be in touch within 24
                hours.
              </p>
              <button
                onClick={() => {
                  /* Optional: reset success state to show form again */
                }}
                className="mt-8 text-secondary uppercase tracking-widest font-bold text-sm border-b border-secondary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className="space-y-8"
              onSubmit={handleSubmit}
              onFocus={prepareForm}
            >
              <div>
                <label
                  htmlFor="full-name"
                  className="block uppercase tracking-widest text-xs font-bold mb-2 text-surface/40"
                >
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-required="true"
                  className={`w-full bg-transparent border-0 border-b-2 ${errors.full_name ? "border-red-500" : "border-surface/20"} focus:ring-0 focus:border-secondary transition-colors py-4 text-xl placeholder:text-surface/10`}
                  placeholder="John Doe"
                  type="text"
                />
                {errors.full_name && (
                  <p className="text-red-500 text-xs mt-1 uppercase tracking-tighter">
                    {errors.full_name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="work-email"
                  className="block uppercase tracking-widest text-xs font-bold mb-2 text-surface/40"
                >
                  Work Email
                </label>
                <input
                  id="work-email"
                  name="work_email"
                  value={formData.work_email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-required="true"
                  className={`w-full bg-transparent border-0 border-b-2 ${errors.work_email ? "border-red-500" : "border-surface/20"} focus:ring-0 focus:border-secondary transition-colors py-4 text-xl placeholder:text-surface/10`}
                  placeholder="john@company.com"
                  type="email"
                />
                {errors.work_email && (
                  <p className="text-red-500 text-xs mt-1 uppercase tracking-tighter">
                    {errors.work_email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block uppercase tracking-widest text-xs font-bold mb-2 text-surface/40"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-transparent border-0 border-b-2 ${errors.message ? "border-red-500" : "border-surface/20"} focus:ring-0 focus:border-secondary transition-colors py-4 text-xl placeholder:text-surface/10 resize-none`}
                  placeholder="Briefly describe what you're looking for..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 uppercase tracking-tighter">
                    {errors.message}
                  </p>
                )}
              </div>

              {errors.general && (
                <div className="p-4 text-red-500 bg-red-500/10 border border-red-500/20 text-sm uppercase tracking-widest font-bold">
                  {errors.general}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-on-secondary py-6 font-black uppercase tracking-[0.2em] text-sm hover:-translate-y-1 transition-transform disabled:opacity-50 disabled:translate-y-0"
              >
                {isSubmitting ? "Processing..." : "Get Started"}
              </button>
            </form>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
