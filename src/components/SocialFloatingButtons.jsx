import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const SocialFloatingButtons = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap');

        .social-floating-group {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column-reverse;
          gap: 12px;
          z-index: 9999;
          padding: 8px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* Desktop: horizontal arrangement */
        @media (min-width: 641px) {
          .social-floating-group {
            flex-direction: column-reverse;
            gap: 12px;
          }
        }

        .social-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2), 0 4px 16px rgba(0,0,0,0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .social-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          transition: left 0.3s ease;
          z-index: -1;
        }

        .social-btn:hover {
          transform: scale(1.1) translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3), 0 0 32px rgba(var(--glow-color), 0.6);
        }

        .social-btn:hover::before {
          left: 0;
        }

        /* WhatsApp */
        .whatsapp {
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
        }
        .whatsapp:hover { --glow-color: 37,211,102; }

        /* Instagram */
        .instagram {
          background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: white;
        }
        .instagram:hover { --glow-color: 240,148,51; }

        /* Facebook */
        .facebook {
          background: linear-gradient(135deg, #1877F2, #0B66C2);
          color: white;
        }
        .facebook:hover { --glow-color: 24,119,242; }

        /* YouTube */
        .youtube {
          background: linear-gradient(135deg, #FF0000, #CC0000);
          color: white;
        }
        .youtube:hover { --glow-color: 255,0,0; }

        /* Tooltips */
        .social-btn[data-tooltip]:hover::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background: rgba(0,0,0,0.85);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Nunito', sans-serif;
          white-space: nowrap;
          z-index: 10000;
          margin-bottom: 8px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          animation: tooltipFade 0.2s ease;
        }

        @keyframes tooltipFade {
          from { opacity: 0; transform: translateX(-50%) translateY(-12px); }
          to { opacity: 1; transform: translateX(-50%) translateY(-8px); }
        }

        /* Responsive - always vertical, just size adjustments */
        @media (max-width: 640px) {
          .social-floating-group {
            gap: 10px;
            bottom: 16px;
            right: 16px;
          }
          .social-btn {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .social-floating-group {
            bottom: 12px;
            right: 12px;
          }
          .social-btn {
            width: 44px;
            height: 44px;
            font-size: 18px;
          }
        }
      `}</style>

      <div className="social-floating-group">
        <a
          href="https://wa.me/919813412380?text=Hello%20Shree%20Ram%20Public%20School!"
          className="social-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.instagram.com/srpskanhracharkhidadri/"
          className="social-btn instagram"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Follow on Instagram"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/srpskanhra2014/"
          className="social-btn facebook"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Like on Facebook"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.youtube.com/@shreeramschoolkanhra"
          className="social-btn youtube"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Watch on YouTube"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </>
  );
};

export default SocialFloatingButtons;
