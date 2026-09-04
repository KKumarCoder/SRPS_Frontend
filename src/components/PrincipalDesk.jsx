import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const PARAGRAPHS = [
  `At Shree Ram Public School, we believe in the transformative power of education. Our mission is to empower young minds, nurturing them to reach their full potential and contribute meaningfully to society.`,

  `We create an environment where curiosity is encouraged, creativity is celebrated, and lifelong learning is embraced. Our dedicated faculty and comprehensive curriculum ensure every student receives a well-rounded education.`,

  `As the principal, I am honored to lead a community committed to excellence. Together we inspire, innovate, and ignite a passion for learning. May each student discover the brilliance of knowledge every day.`,
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PrincipalDesk() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');

        .principal-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 10% 15%, rgba(232,168,48,0.12), transparent 25%),
            radial-gradient(circle at 90% 85%, rgba(14,95,107,0.10), transparent 30%),
            linear-gradient(135deg, #fffdf9 0%, #f7f4ed 50%, #eef6f5 100%);
        }

        .principal-grid {
          position: relative;
          z-index: 5;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(340px, 0.9fr) minmax(420px, 1.1fr);
          gap: 90px;
          align-items: center;
        }

        .principal-photo-card {
          position: relative;
          max-width: 430px;
          margin: 0 auto;
        }

        .principal-photo-shell {
          position: relative;
          padding: 10px;
          border-radius: 28px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(14,95,107,0.10);
          box-shadow:
            0 35px 80px rgba(14,95,107,0.13),
            0 10px 25px rgba(0,0,0,0.05);
          backdrop-filter: blur(12px);
        }

        .principal-photo-inner {
          position: relative;
          overflow: hidden;
          border-radius: 21px;
          aspect-ratio: 3 / 4;
          background: #0E5F6B;
        }

        .principal-photo-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition:
            transform 0.7s cubic-bezier(.16,1,.3,1),
            filter 0.5s ease;
        }

        .principal-photo-card:hover .principal-photo-inner img {
          transform: scale(1.045);
        }

        .principal-photo-overlay {
          position: absolute;
          inset: auto 0 0;
          height: 42%;
          background: linear-gradient(
            to top,
            rgba(5, 50, 58, 0.72),
            transparent
          );
          pointer-events: none;
        }

        .principal-name-card {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 24px;
          z-index: 10;
          padding: 17px 19px;
          border-radius: 16px;
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(255,255,255,0.65);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
          backdrop-filter: blur(14px);
        }

        .principal-badge {
          position: absolute;
          top: 28px;
          right: -24px;
          z-index: 20;
          padding: 12px 18px;
          border-radius: 999px;
          background: #E8A830;
          color: white;
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: 0 12px 30px rgba(232,168,48,0.32);
        }

        .principal-corner {
          position: absolute;
          width: 90px;
          height: 90px;
          border-color: #E8A830;
          opacity: .9;
        }

        .principal-corner.one {
          left: -20px;
          top: -20px;
          border-left: 3px solid #E8A830;
          border-top: 3px solid #E8A830;
          border-radius: 24px 0 0 0;
        }

        .principal-corner.two {
          right: -20px;
          bottom: -20px;
          border-right: 3px solid #0E5F6B;
          border-bottom: 3px solid #0E5F6B;
          border-radius: 0 0 24px 0;
        }

        .principal-content {
          position: relative;
        }

        .principal-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(232,168,48,0.11);
          border: 1px solid rgba(232,168,48,0.22);
          color: #B67B14;
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.17em;
        }

        .principal-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E8A830;
          box-shadow: 0 0 0 5px rgba(232,168,48,0.13);
        }

        .principal-heading {
          margin: 22px 0 0;
          color: #113D45;
          font-family: "Playfair Display", serif;
          font-size: clamp(2.25rem, 4vw, 4rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.025em;
        }

        .principal-heading span {
          color: #0E5F6B;
          font-style: italic;
          position: relative;
          display: inline-block;
        }

        .principal-heading span::after {
          content: "";
          position: absolute;
          height: 8px;
          left: 2px;
          right: 0;
          bottom: 2px;
          background: rgba(232,168,48,0.25);
          z-index: -1;
          border-radius: 10px;
        }

        .principal-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 24px 0 26px;
        }

        .principal-divider-line {
          width: 68px;
          height: 3px;
          border-radius: 10px;
          background: linear-gradient(90deg, #E8A830, #f4cf84);
        }

        .principal-divider-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #0E5F6B;
          opacity: .55;
        }

        .principal-message-box {
          position: relative;
          padding: 26px 28px;
          border-radius: 22px;
          background: rgba(255,255,255,0.68);
          border: 1px solid rgba(14,95,107,0.09);
          box-shadow: 0 16px 40px rgba(14,95,107,0.06);
          backdrop-filter: blur(12px);
        }

        .principal-quote {
          position: absolute;
          top: -24px;
          right: 22px;
          color: rgba(14,95,107,0.09);
          font-family: Georgia, serif;
          font-size: 105px;
          line-height: 1;
          user-select: none;
        }

        .principal-paragraph {
          position: relative;
          z-index: 2;
          margin: 0;
          color: #566267;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          line-height: 1.9;
        }

        .principal-paragraph + .principal-paragraph {
          margin-top: 14px;
        }

        .principal-blessing {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 21px;
          color: #0E5F6B;
          font-family: "Playfair Display", serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 600;
        }

        .principal-signature-card {
          margin-top: 26px;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 16px 18px;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(14,95,107,0.06),
            rgba(232,168,48,0.07)
          );
          border: 1px solid rgba(14,95,107,0.10);
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .principal-signature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(14,95,107,0.10);
          border-color: rgba(232,168,48,.28);
        }

        .principal-signature {
          width: 118px;
          min-width: 118px;
          height: 74px;
          object-fit: contain;
          object-position: center;
          filter: contrast(1.05);
        }

        .principal-signature-separator {
          width: 1px;
          height: 48px;
          background: rgba(14,95,107,0.15);
        }

        .principal-info-name {
          margin: 0;
          font-family: "Playfair Display", serif;
          color: #0E5F6B;
          font-size: 18px;
          font-weight: 700;
        }

        .principal-info-degree {
          margin: 3px 0 0;
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .06em;
          color: #B78322;
        }

        .principal-info-role {
          margin: 5px 0 0;
          font-family: "DM Sans", sans-serif;
          color: #869095;
          font-size: 11px;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .floating-circle.c1 {
          width: 310px;
          height: 310px;
          top: -150px;
          left: -120px;
          border: 1px solid rgba(14,95,107,0.07);
        }

        .floating-circle.c2 {
          width: 480px;
          height: 480px;
          right: -260px;
          bottom: -280px;
          border: 1px solid rgba(232,168,48,0.10);
        }

        .floating-plus {
          position: absolute;
          color: rgba(14,95,107,0.12);
          font-family: "DM Sans", sans-serif;
          font-size: 22px;
          font-weight: 300;
          pointer-events: none;
        }

        @media (max-width: 960px) {
          .principal-grid {
            grid-template-columns: 1fr 1.1fr;
            gap: 55px;
          }

          .principal-badge {
            right: -8px;
          }
        }

        @media (max-width: 760px) {
          .principal-section {
            padding-top: 70px !important;
            padding-bottom: 70px !important;
          }

          .principal-grid {
            grid-template-columns: 1fr;
            gap: 65px;
          }

          .principal-photo-card {
            width: min(100%, 390px);
          }

          .principal-content {
            text-align: left;
          }

          .principal-heading {
            font-size: clamp(2.1rem, 10vw, 3.1rem);
          }

          .principal-badge {
            right: -5px;
            top: 22px;
          }

          .principal-signature-card {
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .principal-section {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          .principal-photo-shell {
            padding: 7px;
            border-radius: 22px;
          }

          .principal-photo-inner {
            border-radius: 17px;
          }

          .principal-name-card {
            left: 15px;
            right: 15px;
            bottom: 15px;
            padding: 14px 16px;
          }

          .principal-badge {
            font-size: 9px;
            padding: 9px 12px;
          }

          .principal-message-box {
            padding: 23px 20px;
          }

          .principal-paragraph {
            font-size: 13.5px;
            line-height: 1.8;
          }

          .principal-signature-card {
            gap: 12px;
            padding: 13px;
          }

          .principal-signature {
            width: 92px;
            min-width: 92px;
            height: 62px;
          }

          .principal-signature-separator {
            height: 40px;
          }
        }
      `}</style>

      <section
        className="principal-section"
        style={{
          padding: "105px 24px",
        }}
      >
        {/* Background Decorative Circles */}

        <div className="floating-circle c1" />
        <div className="floating-circle c2" />

        {/* Floating Decorations */}

        <motion.div
          className="floating-plus"
          style={{
            left: "7%",
            top: "24%",
          }}
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -12, 0],
                  rotate: [0, 12, 0],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          +
        </motion.div>

        <motion.div
          className="floating-plus"
          style={{
            right: "8%",
            top: "18%",
            color: "rgba(232,168,48,0.18)",
          }}
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, 10, 0],
                  rotate: [0, -10, 0],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>

        <div className="principal-grid">
          {/* =========================
              LEFT — PRINCIPAL PHOTO
          ========================== */}

          <motion.div
            className="principal-photo-card"
            initial={
              reduceMotion
                ? {}
                : {
                    opacity: 0,
                    x: -45,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            {/* Corner Frames */}

            <motion.div
              className="principal-corner one"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              viewport={{ once: true }}
            />

            <motion.div
              className="principal-corner two"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.55,
              }}
              viewport={{ once: true }}
            />

            <div className="principal-photo-shell">
              <div className="principal-photo-inner">
                <img src="/School_pic/NCC_Pic_36.JPEG" alt="Principal Amit" />

                <div className="principal-photo-overlay" />
              </div>
            </div>
          </motion.div>

          {/* =========================
              RIGHT — MESSAGE
          ========================== */}

          <motion.div
            className="principal-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {/* Heading */}

            <motion.h2 className="principal-heading" variants={itemVariants}>
              Inspiring Minds,
              <br />
              Building a <span>Brighter Future.</span>
            </motion.h2>

            {/* Divider */}

            <motion.div className="principal-divider" variants={itemVariants}>
              <motion.div
                className="principal-divider-line"
                initial={{
                  scaleX: 0,
                  transformOrigin: "left",
                }}
                whileInView={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
                viewport={{
                  once: true,
                }}
              />

              <div className="principal-divider-dot" />

              <div
                className="principal-divider-dot"
                style={{
                  opacity: 0.25,
                }}
              />
            </motion.div>

            {/* Message Box */}

            <motion.div
              className="principal-message-box"
              variants={itemVariants}
            >
              <div className="principal-quote">“</div>

              {PARAGRAPHS.map((para, index) => (
                <motion.p
                  className="principal-paragraph"
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.2 + index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Blessing */}

              <motion.div
                className="principal-blessing"
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.55,
                }}
                viewport={{
                  once: true,
                }}
              >
                <span
                  style={{
                    width: "26px",
                    height: "1px",
                    background: "#E8A830",
                    display: "inline-block",
                  }}
                />
                May God Bless and Guide Us All 🙏
              </motion.div>
            </motion.div>

            {/* Signature Area */}

            <motion.div
              className="principal-signature-card"
              variants={itemVariants}
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -3,
                    }
              }
            >
              <motion.img
                src="/School_pic/principal-signature-transparent.png"
                alt="Principal Amit Signature"
                className="principal-signature"
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                viewport={{
                  once: true,
                }}
              />

              <div className="principal-signature-separator" />

              <div>
                <p className="principal-info-name">Amit</p>

                <p className="principal-info-degree">M.SC. • B.ED.</p>

                <p className="principal-info-role">
                  Principal, Shree Ram Public School (CBSE)
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
