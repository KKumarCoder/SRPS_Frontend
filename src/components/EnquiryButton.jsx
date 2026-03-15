import { useContact } from "../contexts/ContactContext.jsx";

const EnquiryButton = ({
  children = "Enquiry",
  className = "",
  fullWidth = false,
}) => {
  const { openModal } = useContact();

  return (
    <button
      onClick={openModal}
      className={`
        open-contact-popup
        font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500
        hover:from-yellow-500 hover:via-yellow-600 hover:to-amber-600
        text-teal-900 text-sm md:text-base font-montserrat font-semibold tracking-wide
        border border-yellow-300 hover:border-yellow-400
        active:scale-[0.97] focus:outline-none focus:ring-4 focus:ring-yellow-200/50
        whitespace-nowrap ${fullWidth ? "w-full" : ""} ${className}
      `}
    >
      <span className="inline-flex items-center gap-2">
        💬
        <span>{children}</span>
      </span>
    </button>
  );
};

export default EnquiryButton;
