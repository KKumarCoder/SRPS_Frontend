import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const reasons = [
  {
    title: "EXPERT FACULTY MEMBERS",
    subtitle: "MENTORS WHO INSPIRE",
    description:
      "Our team comprises highly qualified teachers, skilled and extensively trained to nurture young minds.",
    icon: "🧑‍🏫",

    images: [
      "/images/why-us/expert/expert-smart-class.png",
      "/images/why-us/expert/expert-group-learning.png",
      "/images/why-us/expert/expert-digital-teaching.png",
      "/images/why-us/expert/expert-stem-guidance.png",
      "/images/why-us/expert/expert-team-mentoring.png",
    ],

    tags: ["Qualified", "Experienced", "Student-Centred"],
  },

  {
    title: "CO-CURRICULAR ACTIVITIES",
    subtitle: "BEYOND THE CLASSROOM",
    description:
      "A wide range of activities including arts, sports, yoga, dance, music, and swimming to ensure well-rounded development.",
    icon: "⚽",

    images: [
      "/images/why-us/activities/activity-arts.png",
      "/images/why-us/activities/activity-sports.png",
      "/images/why-us/activities/activity-yoga.png",
      "/images/why-us/activities/activity-dance.png",
      "/images/why-us/activities/activity-music.png",
      "/images/why-us/activities/activity-swimming.png",
    ],

    tags: ["Arts", "Sports", "Yoga", "Dance", "Music", "Swimming"],
  },

  {
    title: "ADVANCED INFRASTRUCTURE",
    subtitle: "SMART & SECURE CAMPUS",
    description:
      "Cutting-edge facilities featuring air-conditioned classrooms, multimedia teaching tools, smart boards, and comprehensive CCTV.",
    icon: "🏫",

    images: ["/images/why-us/infrastructure/advanced-infrastructure.png"],

    tags: ["Smart Boards", "Multimedia", "CCTV", "AC Classrooms"],
  },

  {
    title: "MONTESSORI LAB",
    subtitle: "LEARN BY DOING",
    description:
      "A dedicated space for experiential learning, offering hands-on experiences that lay a strong foundation for future academic excellence.",
    icon: "🧩",

    images: [
      "/images/why-us/montessori/montessori-learning.png",
      "/images/why-us/montessori/montessori-activities.png",
    ],

    tags: ["Hands-on", "Creative", "Experiential"],
  },
];

const ReasonCard = ({ item, index, inView }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!item.images || item.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % item.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [item.images]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        bg-white
        rounded-[28px]
        overflow-hidden
        border border-slate-100
        shadow-[0_12px_40px_rgba(15,23,42,0.08)]
        hover:shadow-[0_22px_65px_rgba(15,23,42,0.16)]
        transition-shadow
        duration-500
      "
    >
      {/* =========================
          MAIN IMAGE ONLY
      ========================== */}
      <div className="relative h-[280px] md:h-[320px] overflow-hidden bg-slate-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={item.images[activeImage]}
            alt={item.title}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.04,
            }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition-transform
              duration-[1800ms]
            "
          />
        </AnimatePresence>

        {/* Dark Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/80
            via-slate-900/10
            to-transparent
          "
        />

        {/* Top Icon */}
        <div
          className="
            absolute
            top-5
            left-5
            w-14
            h-14
            rounded-2xl
            bg-white/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-3xl
            shadow-lg
          "
        >
          {item.icon}
        </div>

        {/* Small image counter */}
        {item.images.length > 1 && (
          <div
            className="
              absolute
              top-5
              right-5
              px-3
              py-1.5
              rounded-full
              text-xs
              font-semibold
              text-white
              bg-black/30
              backdrop-blur-md
              border
              border-white/20
            "
          >
            {activeImage + 1} / {item.images.length}
          </div>
        )}

        {/* Image Bottom Heading */}
        <div className="absolute bottom-5 left-5 right-5">
          <p
            className="
              text-orange-300
              font-bold
              text-xs
              tracking-[0.20em]
              mb-2
            "
          >
            {item.subtitle}
          </p>

          <h3
            className="
              text-white
              text-xl
              md:text-2xl
              font-black
              tracking-tight
              leading-tight
            "
          >
            {item.title}
          </h3>
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================== */}
      <div className="p-6 md:p-7">
        <p
          className="
            text-slate-600
            leading-7
            text-[15px]
            mb-5
          "
        >
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-3
                py-1.5
                text-xs
                font-semibold
                rounded-full
                text-blue-900
                bg-blue-50
                border
                border-blue-100
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      className="
        relative
        py-20
        md:py-24
        bg-gradient-to-b
        from-white
        via-blue-50/30
        to-white
        overflow-hidden
      "
    >
      {/* Decoration */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* =========================
            HEADER
        ========================== */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-orange-500
              font-bold
              text-sm
              tracking-[0.25em]
              uppercase
              mb-3
            "
          >
            Why Shree Ram Public School
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              text-3xl
              md:text-5xl
              font-black
              text-blue-950
              leading-tight
              tracking-tight
            "
          >
            Fostering Comprehensive
            <span className="text-orange-500"> Growth</span>
          </motion.h2>

          <p className="mt-5 text-slate-600 text-base md:text-lg leading-8">
            A nurturing environment where academic excellence, creativity,
            character and confidence grow together.
          </p>
        </div>

        {/* =========================
            CARDS
        ========================== */}
        <div
          ref={ref}
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-7
            md:gap-9
            max-w-7xl
            mx-auto
          "
        >
          {reasons.map((item, index) => (
            <ReasonCard
              key={item.title}
              item={item}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
