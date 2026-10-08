/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* Close on Escape key */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  /* Lock body & Lenis smooth scroll while popup is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      if (window.lenisInstance) {
        window.lenisInstance.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (window.lenisInstance) {
        window.lenisInstance.start();
      }

      const timeout = setTimeout(() => {
        setIsSubmitted(false);
        setErrorMessage("");
      }, 300);

      return () => clearTimeout(timeout);
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (window.lenisInstance) {
        window.lenisInstance.start();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Please enter a brief message or requirements.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    setTimeout(() => {
      try {
        const storedLeads = JSON.parse(
          localStorage.getItem("bmo_contact_leads") || "[]"
        );

        storedLeads.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });

        localStorage.setItem("bmo_contact_leads", JSON.stringify(storedLeads));
      } catch (err) {
        console.warn("Storage error:", err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const inputClass =
    "w-full rounded-xl border border-stone-200 bg-stone-50/70 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10";

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[100] flex h-full w-full items-center justify-center overflow-y-auto overscroll-contain bg-slate-950/60 p-4 sm:p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Full Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 cursor-pointer"
        aria-hidden="true"
      />

      {/* Spacious, Centered & Responsive Modal Card */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-[420px] max-h-[92dvh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-7 shadow-2xl transition-all animate-scale">
        
        {/* Top Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3.5 top-3.5 sm:right-5 sm:top-5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-stone-100 text-stone-400 transition-colors hover:bg-stone-200 hover:text-stone-700 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-sm" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-4 sm:mb-5 pr-8">
              <div className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-orange-50 border border-orange-100 text-orange-500 mb-2 sm:mb-2.5">
                <i className="fa-solid fa-envelope text-xs sm:text-sm" />
              </div>

              <h3
                id="contact-modal-title"
                className="font-display text-lg sm:text-2xl font-black text-gray-900 tracking-tight"
              >
                Contact Us
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed">
                Have questions about extraction or custom volume? Drop us a line and we&apos;ll respond shortly.
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-3.5 rounded-xl border border-red-100 bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-600 flex items-center gap-2">
                <i className="fa-solid fa-circle-exclamation text-xs shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Simple Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="mb-1 block text-[11px] sm:text-xs font-bold text-gray-700">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Alex Thorne"
                  className={inputClass}
                  required
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="mb-1 block text-[11px] sm:text-xs font-bold text-gray-700">
                  Work Email <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={inputClass}
                  required
                />
              </div>

              {/* Phone / WhatsApp (Optional) */}
              <div>
                <label className="mb-1 block text-[11px] sm:text-xs font-bold text-gray-700">
                  Phone / WhatsApp <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-[11px] sm:text-xs font-bold text-gray-700">
                  Message / Requirements <span className="text-orange-500">*</span>
                </label>
                <textarea
                  rows={2.5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what cities, categories, or places you want to extract..."
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-2 sm:pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-bold text-gray-500 hover:bg-stone-100 hover:text-gray-700 transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff7c36] via-[#ff6822] to-[#ff5216] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin text-xs" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <i className="fa-solid fa-arrow-right text-[10px]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Clean Success State */
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-500 mb-4">
              <i className="fa-solid fa-check text-2xl" />
            </div>

            <h3 className="font-display text-xl font-bold text-gray-900">
              Message Sent Successfully
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
              Thanks <span className="font-semibold text-gray-800">{formData.fullName}</span>! We received your message and will email you back at <span className="font-semibold text-gray-800">{formData.email}</span> shortly.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-orange-600 transition cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
