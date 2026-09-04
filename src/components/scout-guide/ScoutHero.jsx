import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import ScoutImage from "./ScoutImage.jsx";
import { heroSlides } from "./scoutData.js";

export default function ScoutHero() {
  const reduceMotion = useReducedMotion();
  const initialSlides = useMemo(() => heroSlides, []);
  const [slides, setSlides] = useState(initialSlides);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);

  const move = useCallback(
    (direction) => {
      if (!slides.length) return;
      setCurrent(
        (value) => (value + direction + slides.length) % slides.length,
      );
    },
    [slides.length],
  );

  useEffect(() => {
    if (paused || reduceMotion || slides.length < 2) return undefined;
    const timer = window.setInterval(() => move(1), 5600);
    return () => window.clearInterval(timer);
  }, [move, paused, reduceMotion, slides.length]);

  const removeSlide = (id) => {
    setSlides((items) => items.filter((item) => item.id !== id));
  };

  const normalizedCurrent = slides.length ? current % slides.length : 0;
  const active = slides[normalizedCurrent];

  return (
    <section
      className="sg-hero"
      aria-roledescription="carousel"
      aria-label="Scout and Guide highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 55) move(distance > 0 ? -1 : 1);
        touchStart.current = null;
      }}
    >
      <div className="sg-hero-media">
        <AnimatePresence mode="sync" initial={false}>
          {active && (
            <Motion.div
              key={active.id}
              className="sg-hero-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 1.05 }}
            >
              <ScoutImage
                candidates={active.candidates}
                alt={active.alt}
                fetchPriority={normalizedCurrent === 0 ? "high" : "auto"}
                loading={normalizedCurrent === 0 ? "eager" : "lazy"}
                decoding="async"
                className={reduceMotion ? "" : "sg-ken-burns"}
                onUnavailable={() => removeSlide(active.id)}
              />
            </Motion.div>
          )}
        </AnimatePresence>
        <div className="sg-hero-overlay" />
        <div className="sg-topo sg-topo--hero" aria-hidden="true" />
      </div>

      <div className="sg-container sg-hero-content">
        <Motion.p
          className="sg-eyebrow sg-eyebrow--light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Shree Ram Public School
        </Motion.p>
        <Motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          Scout <span>&amp; Guide</span>
        </Motion.h1>
        <Motion.h2
          key={active?.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {active?.id === 3
            ? "Discipline Builds Character"
            : active?.id === 5
              ? "Adventure Begins Beyond the Classroom"
              : active?.id === 9
                ? "Service Before Self"
                : active?.id === 10
                  ? "Learning Through Nature"
                  : "Be Prepared. Lead. Serve. Inspire."}
        </Motion.h2>
        <Motion.p
          key={`copy-${active?.id}`}
          className="sg-hero-copy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.48 }}
        >
          {active?.id === 3
            ? "Confidence begins with responsibility."
            : active?.id === 5
              ? "Explore. Learn. Grow."
              : active?.id === 9
                ? "Small actions can create meaningful change."
                : active?.id === 10
                  ? "Developing courage, resilience and self-reliance."
                  : "Through discipline, teamwork, service and outdoor learning, students grow into self-reliant leaders and responsible citizens."}
        </Motion.p>
        <Motion.div
          className="sg-hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
        >
          <a href="#overview" className="sg-button sg-button--gold">
            Explore our journey <ArrowRight size={18} />
          </a>
          <a href="#activities" className="sg-button sg-button--glass">
            View activities
          </a>
        </Motion.div>
      </div>

      <div className="sg-hero-controls">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous hero photograph"
        >
          <ArrowLeft size={19} />
        </button>
        <div
          className="sg-dots"
          aria-label={`Slide ${normalizedCurrent + 1} of ${Math.max(slides.length, 1)}`}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={index === normalizedCurrent ? "is-active" : ""}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === normalizedCurrent ? "true" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Resume carousel" : "Pause carousel"}
        >
          {paused ? <Play size={17} /> : <Pause size={17} />}
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next hero photograph"
        >
          <ArrowRight size={19} />
        </button>
      </div>
      <a
        className="sg-scroll-cue"
        href="#overview"
        aria-label="Scroll to overview"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
