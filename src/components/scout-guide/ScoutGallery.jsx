import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, Images, X } from "lucide-react";
import ScoutImage from "./ScoutImage.jsx";
import { galleryImages, storyImageIds } from "./scoutData.js";

function GalleryCard({ image, index, onOpen, onUnavailable }) {
  return (
    <Motion.button
      type="button"
      className={`sg-gallery-item sg-gallery-item--${(index % 5) + 1}`}
      onClick={onOpen}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.035 }}
      aria-label={`Open photograph ${index + 1}`}
    >
      <ScoutImage
        candidates={image.candidates}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        onUnavailable={onUnavailable}
      />
      <span>
        <Expand size={17} /> View
      </span>
    </Motion.button>
  );
}

function Lightbox({ images, current, onClose, onMove, setCurrent }) {
  const reduceMotion = useReducedMotion();
  const startX = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onMove(-1);
      if (event.key === "ArrowRight") onMove(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onMove]);

  const image = images[current];
  if (!image) return null;

  return (
    <Motion.div
      className="sg-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Scout and Guide photograph viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        ref={closeButtonRef}
        className="sg-lightbox-close"
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X />
      </button>
      <button
        className="sg-lightbox-arrow sg-lightbox-arrow--left"
        type="button"
        onClick={() => onMove(-1)}
        aria-label="Previous photograph"
      >
        <ArrowLeft />
      </button>
      <AnimatePresence mode="wait">
        <Motion.figure
          key={image.id}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
          transition={{ duration: 0.25 }}
          onTouchStart={(event) => {
            startX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (startX.current === null) return;
            const distance = event.changedTouches[0].clientX - startX.current;
            if (Math.abs(distance) > 50) onMove(distance > 0 ? -1 : 1);
            startX.current = null;
          }}
        >
          <ScoutImage
            candidates={image.candidates}
            alt={image.alt}
            decoding="async"
          />
          <figcaption>
            {current + 1} / {images.length}
          </figcaption>
        </Motion.figure>
      </AnimatePresence>
      <button
        className="sg-lightbox-arrow sg-lightbox-arrow--right"
        type="button"
        onClick={() => onMove(1)}
        aria-label="Next photograph"
      >
        <ArrowRight />
      </button>
      <div className="sg-lightbox-thumbs" aria-label="Choose photograph">
        {images.slice(Math.max(0, current - 3), current + 4).map((item) => (
          <button
            type="button"
            key={item.id}
            className={item.id === image.id ? "is-active" : ""}
            onClick={() => setCurrent(images.indexOf(item))}
            aria-label={`Show photograph ${images.indexOf(item) + 1}`}
          >
            <ScoutImage candidates={item.candidates} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </Motion.div>
  );
}

export default function ScoutGallery() {
  const initialStory = useMemo(
    () => storyImageIds.map((id) => galleryImages[id - 1]),
    [],
  );
  const [storyImages, setStoryImages] = useState(initialStory);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [available, setAvailable] = useState(galleryImages);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const removeStory = (id) =>
    setStoryImages((items) => items.filter((item) => item.id !== id));
  const removeGallery = (id) =>
    setAvailable((items) => items.filter((item) => item.id !== id));
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const moveLightbox = useCallback(
    (direction) => {
      setLightboxIndex((value) =>
        value === null || !lightboxImages.length
          ? null
          : (value + direction + lightboxImages.length) % lightboxImages.length,
      );
    },
    [lightboxImages.length],
  );

  return (
    <>
      <section className="sg-section sg-story" id="gallery-preview">
        <div className="sg-container">
          <div className="sg-heading sg-heading--split">
            <div>
              <p className="sg-eyebrow">Our photo story</p>
              <h2>
                Moments That <em>Build Character</em>
              </h2>
            </div>
            <p>
              Purpose-built visuals bring the Hindustan Scouts &amp; Guides
              journey to life through service, training, nature and fellowship.
            </p>
          </div>
          {storyImages.length > 0 ? (
            <div className="sg-story-grid">
              {storyImages.map((image, index) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  index={index}
                  onOpen={() => {
                    setLightboxImages(storyImages);
                    setLightboxIndex(index);
                  }}
                  onUnavailable={() => removeStory(image.id)}
                />
              ))}
            </div>
          ) : (
            <div className="sg-image-empty">
              <Images size={30} />
              <p>
                Scout &amp; Guide visuals will appear here when additional
                illustrations are added.
              </p>
            </div>
          )}
          <div className="sg-centered">
            <button
              type="button"
              className="sg-button sg-button--navy"
              onClick={() => setGalleryOpen((value) => !value)}
            >
              {galleryOpen ? "Hide full gallery" : "View full gallery"}{" "}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {storyImages.length > 0 && (
        <section
          className="sg-story-strip-section"
          aria-labelledby="scout-story-strip-title"
        >
          <div className="sg-container">
            <p className="sg-eyebrow sg-eyebrow--light">A living journey</p>
            <div className="sg-strip-heading">
              <h2 id="scout-story-strip-title">
                Life in Scouting &amp; Guiding
              </h2>
              <p>Scroll or swipe to move through the story.</p>
            </div>
            <div
              className="sg-story-strip"
              tabIndex="0"
              aria-label="Horizontally scrollable Scout and Guide photographs"
            >
              {storyImages.map((image, index) => (
                <button
                  type="button"
                  key={image.id}
                  onClick={() => {
                    setLightboxImages(storyImages);
                    setLightboxIndex(index);
                  }}
                  aria-label={`Open photograph ${index + 1}`}
                >
                  <ScoutImage
                    candidates={image.candidates}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    onUnavailable={() => removeStory(image.id)}
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <AnimatePresence initial={false}>
        {galleryOpen && (
          <Motion.section
            id="gallery"
            className="sg-section sg-full-gallery"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sg-container">
              <div className="sg-heading">
                <p className="sg-eyebrow">Complete collection</p>
                <h2>
                  Life in Scouting <em>&amp; Guiding</em>
                </h2>
                <p>
                  Choose any photograph for a full-screen view. Use arrow keys
                  to move and Escape to close.
                </p>
              </div>
              <div className="sg-masonry">
                {available.map((image, index) => (
                  <GalleryCard
                    key={image.id}
                    image={image}
                    index={index}
                    onOpen={() => {
                      setLightboxImages(available);
                      setLightboxIndex(index);
                    }}
                    onUnavailable={() => removeGallery(image.id)}
                  />
                ))}
              </div>
              {!available.length && (
                <div className="sg-image-empty">
                  <Images size={30} />
                  <p>No valid gallery photographs were found.</p>
                </div>
              )}
            </div>
          </Motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxIndex !== null && lightboxImages.length > 0 && (
          <Lightbox
            images={lightboxImages}
            current={Math.min(lightboxIndex, lightboxImages.length - 1)}
            onClose={closeLightbox}
            onMove={moveLightbox}
            setCurrent={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}
