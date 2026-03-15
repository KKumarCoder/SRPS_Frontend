import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

/* ── Image paths ── */
const SLIDES = [
  {
    src: "/School_pic/NCC_Pic_Primnester_29.JPEG",
   
  },
  { src: "/School_pic/IMG_31.JPG",  },
  { src: "/School_pic/NCC_Pic_35.JPEG",},
  { src: "/School_pic/NCC_Pic_Primenester_30.JPG",  },
  { src: "/School_pic/NCC-Pic_39.JPG",  },
];

/* ── Stats ── */
const STATS = [
  { num: "2,500+", label: "Students" },
  { num: "98%", label: "Board Results" },
  { num: "12+", label: "Years Legacy" },
  { num: "50+", label: "Activities" },
];

/* ── Rotating Typed Word Component ── */
const TypedRotatingWord = () => {
  const words = ["Leaders", "Innovators", "Champions", "Dreamers"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200); // ms per character
  const timeoutRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const fullWord = words[wordIndex];
      let updatedText = isDeleting
        ? fullWord.substring(0, text.length - 1)
        : fullWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullWord) {
        // Word complete – pause then start deleting
        setDelta(2000);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        // Deleted completely – move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setDelta(200);
      } else {
        // Adjust speed: delete faster than type
        setDelta(isDeleting ? 100 : 200);
      }
    };

    timeoutRef.current = setTimeout(tick, delta);
    return () => clearTimeout(timeoutRef.current);
  }, [text, wordIndex, isDeleting, delta, words]);

  return (
    <span className="relative inline-flex items-center">
      <span>{text}</span>
      <span className="ml-0.5 w-0.5 h-7 bg-amber-400 animate-pulse" />
    </span>
  );
};

export default function Hero() {
  const [idx, setIdx] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full min-h-[760px] overflow-hidden bg-slate-950 font-outfit">
      {/* Custom keyframes & global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .font-outfit { font-family: 'Outfit', sans-serif; }

        /* Slide crossfade */
        .hero-slide {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }

        /* Floating animation for decorative shapes */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        /* Smooth width expansion for active dot */
        @keyframes dotProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        /* Glow pulse for stats */
        @keyframes softGlow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(245,158,11,0.3)); }
          50% { filter: drop-shadow(0 0 15px rgba(245,158,11,0.6)); }
        }
      `}</style>

      {/* ════════════════════════════════
          NOISE TEXTURE (subtle grain)
      ════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ════════════════════════════════
          BACKGROUND IMAGES with enhanced overlay
      ════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={SLIDES[idx].src}
            alt={SLIDES[idx].caption}
            className="hero-slide"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          />
        </AnimatePresence>

        {/* Multi-layer gradient overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,158,11,0.15)_0%,_transparent_70%)]" />
      </div>

      {/* ════════════════════════════════
          DECORATIVE FLOATING SHAPES (curves & blobs)
      ════════════════════════════════ */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl"
        />
        {/* Curved line accent */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-amber-500/10 fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,120 C480,20 960,20 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* ════════════════════════════════
          MAIN CONTENT (left aligned)
      ════════════════════════════════ */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-24 max-w-3xl">
        <div className="w-full mt-10">
       

          {/* Headline with animated underline + typing effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white"
          >
            Shaping{" "}
            <span className="relative inline-block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Tomorrow's
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 240 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q60 2 120 8 Q180 14 238 8"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.9"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            <TypedRotatingWord /> Today.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
          >
            Shree Ram Public School — where{" "}
            <span className="text-amber-300 font-semibold">
              Atal Tinkering Labs
            </span>
            , world-class sports, and academic excellence meet to build
            confident leaders.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/admissions"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 font-bold text-slate-900 shadow-lg shadow-amber-600/30 transition-all hover:shadow-xl hover:shadow-amber-600/40 hover:scale-105 active:scale-100"
            >
              <span className="relative z-10 flex items-center gap-2">
                Enroll Your Child
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>

            <Link
              to="/campus"
              className="group rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Explore Campus
                <MapPin
                  size={18}
                  className="transition-transform group-hover:rotate-12"
                />
              </span>
            </Link>
          </motion.div>

          {/* Stats with modern cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 text-center"
              >
                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  {stat.num}
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
                {/* subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-amber-500/0 hover:bg-amber-500/5 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════
          SCROLL INDICATOR (bouncing mouse)
      ════════════════════════════════ */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* ════════════════════════════════
          TOP RIGHT: large slide number (decorative)
      ════════════════════════════════ */}
      <div className="absolute top-8 right-8 z-20 text-right select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-8xl font-black text-white/5"
          >
            {String(idx + 1).padStart(2, "0")}
          </motion.div>
        </AnimatePresence>
        <div className="h-1 w-16 bg-amber-500/30 ml-auto mt-2 rounded-full" />
        <div className="text-xs text-white/20 mt-1 tracking-widest">
          / {String(SLIDES.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}