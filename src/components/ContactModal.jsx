import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContact } from "../contexts/ContactContext.jsx";

const ContactModal = () => {
  const {
    isOpen,
    closeModal,
    isSubmitting,
    submitForm,
    submitError,
    submitSuccess,
  } = useContact();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    class: "",
    subject: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: "" });
  const [captchaError, setCaptchaError] = useState(false);
  const modalRef = useRef(null);

  // Generate random captcha
  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: "" });
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter valid 10-digit phone";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter valid email";

    if (formData.class === "") newErrors.class = "Please select Class";

    if (parseInt(captcha.answer) !== captcha.num1 + captcha.num2) {
      setCaptchaError(true);
      newErrors.captcha = "Incorrect answer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, captcha]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setCaptchaError(false);

      if (!validateForm()) return;

      await submitForm({
        ...formData,
        captcha: { ...captcha, solved: true },
      });
      if (!submitError && !isSubmitting) {
        // Reset form on success
        setFormData({
          fullName: "",
          phone: "",
          class: "",
          subject: "",
          email: "",
          address: "",
        });
        setCaptchaError(false);
        setCaptcha((prev) => ({ ...prev, answer: "" }));
      }
    },
    [formData, captcha, validateForm, submitForm, submitError, isSubmitting],
  );

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === modalRef.current) closeModal();
    },
    [closeModal],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") closeModal();
    },
    [closeModal],
  );

  // Re-generate captcha when modal opens
  useEffect(() => {
    if (isOpen) {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      setCaptcha({ num1, num2, answer: "" });
      setCaptchaError(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            ref={modalRef}
            onClick={handleOverlayClick}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full max-h-[90vh] overflow-y-auto z-[10000] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20"
          >
            {/* Header */}
            <div className="p-6 pb-2 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 -m-2 rounded-2xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all w-10 h-10 flex items-center justify-center"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                    errors.fullName
                      ? "border-red-300 ring-red-200/50 bg-red-50"
                      : "border-gray-200 hover:border-teal-300 focus:border-teal-400 focus:ring-teal-200/50"
                  }`}
                  placeholder="Enter your full name"
                  required
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                    })
                  }
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                    errors.phone
                      ? "border-red-300 ring-red-200/50 bg-red-50"
                      : "border-gray-200 hover:border-teal-300 focus:border-teal-400 focus:ring-teal-200/50"
                  }`}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Class */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Class <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.class}
                  onChange={(e) =>
                    setFormData({ ...formData, class: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                    errors.class
                      ? "border-red-300 ring-red-200/50 bg-red-50"
                      : "border-gray-200 hover:border-teal-300 focus:border-teal-400 focus:ring-teal-200/50"
                  }`}
                  required
                >
                  <option value="">Select Class</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option
                      key={i + 1}
                      value={`Class ${i + 1}`}
                    >{`Class ${i + 1}`}</option>
                  ))}
                  <option value="XI-XII">Class XI-XII</option>
                  <option value="Other">Other</option>
                </select>
                {errors.class && (
                  <p className="mt-1 text-xs text-red-500">{errors.class}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                    errors.email
                      ? "border-red-300 ring-red-200/50 bg-red-50"
                      : "border-gray-200 hover:border-teal-300 focus:border-teal-400 focus:ring-teal-200/50"
                  }`}
                  placeholder="your@email.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-teal-300 focus:border-teal-400 focus:ring-4 focus:ring-teal-200/50 focus:outline-none transition-all"
                  placeholder="Admission Enquiry, etc."
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Address (Optional)
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-teal-300 focus:border-teal-400 focus:ring-4 focus:ring-teal-200/50 focus:outline-none transition-all resize-vertical"
                  placeholder="Your complete address"
                />
              </div>

              {/* Captcha */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span>
                    Verification <span className="text-red-500">*</span>
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {captcha.num1} + {captcha.num2} = ?
                  </span>
                </label>
                <input
                  type="number"
                  value={captcha.answer}
                  onChange={(e) => {
                    setCaptchaError(false);
                    setCaptcha((prev) => ({ ...prev, answer: e.target.value }));
                  }}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                    captchaError
                      ? "border-red-300 ring-red-200/50 bg-red-50"
                      : "border-gray-200 hover:border-teal-300 focus:border-teal-400 focus:ring-teal-200/50"
                  }`}
                  placeholder="Answer"
                  min="0"
                  max="20"
                />
                {errors.captcha && (
                  <p className="mt-1 text-xs text-red-500">{errors.captcha}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="m4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </form>

            {/* Success/Error Messages */}
            <AnimatePresence mode="wait">
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="px-6 py-4 bg-green-50 border-t border-green-200"
                >
                  <div className="flex items-center gap-3 text-green-800">
                    <svg
                      className="w-6 h-6 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold text-sm">
                      Thank you! Your enquiry has been sent successfully. We'll
                      contact you soon.
                    </span>
                  </div>
                </motion.div>
              )}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-6 py-4 bg-red-50 border-t border-red-200"
                >
                  <div className="flex items-center gap-3 text-red-800">
                    <svg
                      className="w-6 h-6 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-semibold text-sm">{submitError}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
