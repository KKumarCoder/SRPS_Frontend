import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContact } from "../contexts/ContactContext.jsx";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSftTV52rV-NcEJYXOI7LfpG27yOUMBpUBSr7joouWFqMsKZWQ/viewform?embedded=true";

const ContactModal = () => {
  const { isOpen, closeModal } = useContact();
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  const handleOverlayClick = (event) => {
    if (event.target === modalRef.current) closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          role="presentation"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-md sm:p-6"
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="flex h-[min(92vh,820px)] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] border border-white/60 bg-[#fffdf8] shadow-[0_24px_90px_rgba(5,31,45,0.45)]"
          >
            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-[#eadfca] bg-[#fffdf8] px-5 py-4 sm:px-7">
              <div>
                <p className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c07c2d]">
                  Shree Ram Public School
                </p>
                <h2
                  id="enquiry-modal-title"
                  className="text-xl font-extrabold text-[#124f5c] sm:text-2xl"
                >
                  Admission Enquiry
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close enquiry form"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#eadfca] text-2xl leading-none text-[#124f5c] transition hover:border-[#c07c2d] hover:bg-[#fff4df]"
              >
                <span aria-hidden="true">&#215;</span>
              </button>
            </header>
            <div className="min-h-0 flex-1 bg-white">
              <iframe
                title="Shree Ram Public School admission enquiry form"
                src={GOOGLE_FORM_URL}
                className="h-full min-h-[620px] w-full border-0"
                loading="lazy"
              />
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
