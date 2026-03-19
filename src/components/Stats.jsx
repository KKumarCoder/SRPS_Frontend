import React from "react";

const usps = [
  {
    icon: "🎓",
    title: "Holistic Education",
    sub: "Academics, Arts & Sports",
    color: "#e8890c",
    light: "#fff3e0",
  },
  {
    icon: "🚌",
    title: "Safe Transport",
    sub: "GPS buses, trained staff",
    color: "#1a7fd4",
    light: "#eaf4ff",
  },
  {
    icon: "🔬",
    title: "Modern Labs",
    sub: "Science, Math & Computer",
    color: "#20a850",
    light: "#eafaf0",
  },
  {
    icon: "🏅",
    title: "13+ Years Trust",
    sub: "Badhra's #1 school",
    color: "#7c3aed",
    light: "#f3ecff",
  },
  {
    icon: "🌿",
    title: "Green Campus",
    sub: "Eco-friendly environment",
    color: "#e8890c",
    light: "#fff3e0",
  },
  {
    icon: "🎭",
    title: "Arts & Culture",
    sub: "Dance, music & drama",
    color: "#1a7fd4",
    light: "#eaf4ff",
  },
  {
    icon: "👩‍🏫",
    title: "Expert Staff",
    sub: "Passionate educators",
    color: "#20a850",
    light: "#eafaf0",
  },
  {
    icon: "🏆",
    title: "Excellent Results",
    sub: "Consistent top scores",
    color: "#7c3aed",
    light: "#f3ecff",
  },
];

const FeatureCard = ({ icon, title, sub, color, light, index }) => {
  return (
    <div
      className="feature-card group relative flex-shrink-0 w-[240px] rounded-[28px] p-5 border border-white/60 backdrop-blur-xl overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${light} 0%, #ffffff 70%)`,
        boxShadow: "0 12px 35px rgba(15, 23, 42, 0.08)",
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* top glow */}
      <div
        className="absolute -top-12 -right-10 w-28 h-28 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500"
        style={{ background: color }}
      />

      {/* animated border shine */}
      <div className="absolute inset-0 rounded-[28px] pointer-events-none overflow-hidden">
        <div
          className="shine absolute top-0 -left-[120%] w-[60%] h-full skew-x-[-25deg] opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.95), transparent)",
          }}
        />
      </div>

      {/* icon */}
      <div
        className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl mb-4 text-3xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}dd)`,
          boxShadow: `0 12px 24px ${color}33`,
        }}
      >
        <span className="drop-shadow-sm">{icon}</span>
      </div>

      {/* title */}
      <h3
        className="relative z-10 text-[18px] font-extrabold leading-snug mb-2 transition-all duration-300"
        style={{ color }}
      >
        {title}
      </h3>

      {/* sub */}
      <p className="relative z-10 text-[13px] text-slate-600 leading-relaxed">
        {sub}
      </p>

      {/* bottom accent */}
      <div
        className="absolute left-5 bottom-0 h-1 rounded-full transition-all duration-500 group-hover:w-20 w-10"
        style={{ background: color }}
      />
    </div>
  );
};

const USP = () => {
  const items = [...usps, ...usps];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800&display=swap');

        .usp-root {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shineMove {
          0% { left: -120%; }
          100% { left: 140%; }
        }

        .marquee-track {
          width: max-content;
          animation: marqueeScroll 34s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .feature-card {
          animation: fadeUp 0.9s ease forwards, floatY 5s ease-in-out infinite;
          opacity: 0;
          transition: transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease;
        }

        .feature-card:hover {
          transform: translateY(-14px) rotate(-1deg) scale(1.02);
          box-shadow: 0 22px 50px rgba(15, 23, 42, 0.14);
          border-color: rgba(255,255,255,0.95);
        }

        .feature-card:hover .shine {
          animation: shineMove 1.2s ease;
        }
      `}</style>

      <section className="usp-root relative overflow-hidden bg-white py-20">
        {/* soft background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[-60px] w-72 h-72 rounded-full bg-orange-100 blur-3xl opacity-60" />
          <div className="absolute bottom-10 right-[-60px] w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-violet-100 blur-3xl opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          {/* heading */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Our School{" "}
              <span className="bg-gradient-to-r from-[#e8890c] via-[#1a7fd4] to-[#7c3aed] bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
              A vibrant learning environment built on academic excellence,
              innovation, safety, culture, and trusted results.
            </p>
          </div>

          {/* marquee cards */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            <div className="marquee-track flex gap-6">
              {items.map((item, i) => (
                <FeatureCard key={i} {...item} index={i % usps.length} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default USP;
