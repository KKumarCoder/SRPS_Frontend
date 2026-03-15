import { createContext, useContext, useState, useCallback } from "react";

const ContactContext = createContext();

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return context;
};

export const ContactProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    setSubmitError(null);
    setSubmitSuccess(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setIsSubmitting(false);
    setSubmitError(null);
    setSubmitSuccess(false);
  }, []);

  const submitForm = useCallback(
    async (formData) => {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Submission failed. Please try again.");
        }

        setSubmitSuccess(true);
        setTimeout(closeModal, 2000);
      } catch (error) {
        setSubmitError(error.message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [closeModal],
  );

  return (
    <ContactContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        isSubmitting,
        submitForm,
        submitError,
        submitSuccess,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
