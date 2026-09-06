import { createElement, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  HeartHandshake,
  Leaf,
  Mountain,
  Quote,
  ShieldCheck,
  Sparkles,
  TreePine,
  Users,
} from "lucide-react";
import { useContact } from "../contexts/ContactContext.jsx";
import ScoutHero from "../components/scout-guide/ScoutHero.jsx";
import ScoutGallery from "../components/scout-guide/ScoutGallery.jsx";
import ScoutImage from "../components/scout-guide/ScoutImage.jsx";
import {
  activities,
  ageGroups,
  aims,
  historyEvents,
  methods,
  outcomes,
  principles,
  adventureImageIds,
  serviceStories,
  skills,
  scoutValues,
  valueCounters,
  getScoutImageCandidates,
} from "../components/scout-guide/scoutData.js";
import "./ScoutGuidePage.css";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();
  return (
    <Motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: reduceMotion ? 0 : 0.62,
        delay: reduceMotion ? 0 : delay,
      }}
      {...props}
    >
      {children}
    </Motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
}) {
  return (
    <Reveal className={`sg-heading sg-heading--${align}`}>
      <p className="sg-eyebrow">{eyebrow}</p>
      <h2>
        {title} {accent && <em>{accent}</em>}
      </h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}

function PhotoPanel({ imageId, alt, className = "", eager = false }) {
  const [available, setAvailable] = useState(true);
  if (!available)
    return (
      <div className={`sg-photo-placeholder ${className}`} aria-hidden="true">
        <TreePine size={48} />
      </div>
    );
  return (
    <div className={`sg-photo-panel ${className}`}>
      <ScoutImage
        candidates={
          typeof imageId === "string"
            ? [encodeURI(imageId)]
            : getScoutImageCandidates(imageId)
        }
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onUnavailable={() => setAvailable(false)}
      />
      <span className="sg-photo-corner" aria-hidden="true" />
    </div>
  );
}

function StickyNav() {
  return (
    <nav className="sg-section-nav" aria-label="Scout Guide page sections">
      <div className="sg-container">
        {[
          ["Overview", "overview"],
          ["History", "history"],
          ["Activities", "activities"],
          ["Skills", "skills"],
          ["Gallery", "gallery-preview"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function ScoutGuidePage() {
  const { openModal } = useContact();
  const methodItems = useMemo(() => methods, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Scout & Guide | Shree Ram Public School";
    const description =
      "Learn how Hindustan Scouts & Guides Association programmes connect scouting, guiding, service, adventure, yoga, environmental care and leadership at Shree Ram Public School.";
    let meta = document.querySelector('meta[name="description"]');
    const oldDescription = meta?.getAttribute("content") ?? null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
    return () => {
      document.title = previousTitle;
      if (oldDescription === null) meta?.remove();
      else meta?.setAttribute("content", oldDescription);
    };
  }, []);

  return (
    <main className="sg-page">
      <ScoutHero />
      <StickyNav />

      <section className="sg-section sg-about" id="overview">
        <div className="sg-container sg-split">
          <Reveal className="sg-about-photo">
            <PhotoPanel
              imageId={2}
              alt="Shree Ram Public School campus and student"
            />
          </Reveal>
          <Reveal className="sg-about-copy" delay={0.1}>
            <p className="sg-eyebrow">About Hindustan Scouts &amp; Guides</p>
            <h2>
              Education for <em>Complete Development</em>
            </h2>
            <p>
              Hindustan Scouts &amp; Guides Association is a non-political,
              non-sectarian, non-communal and non-profit educational
              organisation open to all. Its purpose is to support the mental,
              physical and spiritual development of young people through
              scouting and guiding.
            </p>
            <p>
              The Association connects learning with community development,
              social service, adventure, yoga, all-faith meditation,
              environmental conservation, vocational skills, national
              integration, patriotism, brotherhood, loyalty, discipline and
              leadership.
            </p>
            <div className="sg-keywords">
              {[
                "Community development",
                "Social service",
                "Adventure",
                "Yoga",
                "Environmental care",
                "National integration",
                "Discipline",
                "Leadership",
              ].map((item) => (
                <span key={item}>
                  <Check size={14} />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sg-section sg-section--mist">
        <div className="sg-container">
          <SectionHeading
            eyebrow="Purpose with direction"
            title="Our"
            accent="Aim"
            description="Hindustan Scouts & Guides programmes develop capable, disciplined and service-minded citizens through progressive training and practical participation."
          />
          <div className="sg-card-grid sg-card-grid--three">
            {aims.map((item, index) => (
              <Reveal
                className="sg-aim-card"
                key={item.title}
                delay={index * 0.055}
              >
                <PhotoPanel
                  imageId={item.imageId}
                  alt={`${item.title} in Scout and Guide learning`}
                />
                <div className="sg-aim-card-copy">
                  <span>
                    <item.icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ChevronRight size={18} className="sg-card-arrow" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-principles">
        <div className="sg-container">
          <SectionHeading
            eyebrow="A shared foundation"
            title="Three Core"
            accent="Principles"
            description="The Association's promise joins duty to God or Dharma, duty to country, help to other people and obedience to the Scout/Guide Law."
          />
          <div className="sg-principle-grid">
            {principles.map((item, index) => (
              <Reveal
                key={item.title}
                className="sg-principle"
                delay={index * 0.08}
              >
                <PhotoPanel
                  imageId={item.imageId}
                  alt={`${item.title} in the Scout and Guide movement`}
                />
                <b>{item.number}</b>
                <item.icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-history" id="history">
        <div className="sg-container">
          <SectionHeading
            eyebrow="History of the movement"
            title="A Journey Through"
            accent="Time"
            description="From the early Indian Scout movement to a national association committed to youth development, service and responsible citizenship."
          />
          <div className="sg-timeline">
            {historyEvents.map((event, index) => (
              <Reveal
                key={`${event.year}-${event.title}`}
                className={`sg-timeline-item ${index % 2 ? "is-right" : ""}`}
              >
                <span className="sg-timeline-dot" />
                <div>
                  <time>{event.year}</time>
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="sg-source-note">
            Historical background is summarised from the official Hindustan
            Scouts &amp; Guides Association About Us information.
          </p>
        </div>
      </section>

      <section className="sg-section sg-growth">
        <div className="sg-container">
          <SectionHeading
            eyebrow="Hindustan training progression"
            title="A Journey of"
            accent="Growth"
            description="The Association's Prashikshan Yojna uses test cards, progressive stages, proficiency badges, camps and service to help members advance."
          />
          <div className="sg-growth-path">
            {ageGroups.map((group, index) => (
              <Reveal
                className="sg-growth-card"
                key={group.title}
                delay={index * 0.07}
              >
                <PhotoPanel
                  imageId={group.imageId}
                  alt={`${group.title} age group in Scout and Guide`}
                />
                <span className="sg-growth-step">{group.step}</span>
                <group.icon />
                <h3>{group.title}</h3>
                <p className="sg-age">{group.age}</p>
                <strong>{group.motto}</strong>
                <p>{group.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--navy">
        <div className="sg-container">
          <SectionHeading
            eyebrow="The Hindustan method"
            title="Learning Through"
            accent="Experience"
            description="Promise, Law, good turns, patrol work, practical tests, yoga, outdoor training and service turn values into daily practice."
          />
          <div className="sg-method-flow">
            {methodItems.map(([label, icon], index) => (
              <Reveal
                className="sg-method-item"
                key={label}
                delay={index * 0.045}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {createElement(icon)}
                <h3>{label}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-law">
        <div className="sg-container sg-law-layout">
          <Reveal className="sg-law-intro">
            <p className="sg-eyebrow">Promise, Values &amp; Honour</p>
            <h2>
              A Promise Put <em>Into Practice</em>
            </h2>
            <p>
              Hindustan Scouts &amp; Guides Association asks members to make a
              personal promise: to do their best, do their duty to God or Dharma
              and country, help other people at all times, and obey the
              Scout/Guide Law.
            </p>
            <div className="sg-official-note">
              <ShieldCheck />
              <span>
                <b>Official programme reference</b> Training stages and
                test-card requirements are published in the Association's
                Prashikshan Yojna.
              </span>
            </div>
            <div className="sg-law-hero">
              <ScoutImage
                candidates={[
                  encodeURI(
                    "/Scout Guide pic/ScoutValue01_Trustworthiness.png",
                  ),
                ]}
                alt="Scouts and Guides putting promise and values into practice"
                loading="lazy"
                decoding="async"
              />
              <span>Character • Commitment • Community • Country</span>
            </div>
          </Reveal>
          <div className="sg-law-grid">
            {scoutValues.map((value, index) => (
              <Reveal
                className="sg-law-value"
                key={value.number}
                delay={index * 0.035}
              >
                <div className="sg-law-value-image">
                  <ScoutImage
                    candidates={[value.image]}
                    alt={value.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <b>{value.number}</b>
                </div>
                <div className="sg-law-value-copy">
                  {createElement(value.icon)}
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="sg-law-closing">
            Values learned today become character for life.
          </p>
        </div>
      </section>

      <section className="sg-section sg-skills" id="skills">
        <div className="sg-container">
          <SectionHeading
            eyebrow="Practical capability"
            title="Skills for"
            accent="Life"
            description="Skills learned with the hands strengthen judgement, confidence and readiness for everyday life."
          />
          <div className="sg-skills-grid">
            {skills.map(([title, text, icon, imageId], index) => (
              <Reveal
                className="sg-skill-card"
                key={title}
                delay={(index % 6) * 0.045}
              >
                <PhotoPanel imageId={imageId} alt={`${title} Scout skill`} />
                <div>
                  {createElement(icon)}
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-activities" id="activities">
        <div className="sg-container sg-activities-layout">
          <Reveal className="sg-activities-copy">
            <p className="sg-eyebrow">Learning in action</p>
            <h2>
              Adventure. Discipline. <em>Service.</em>
            </h2>
            <p>
              Hindustan Scouts &amp; Guides training combines ceremony and drill
              with practical skills, outdoor learning, cultural participation,
              yoga, all-faith meditation and community service.
            </p>
            <div className="sg-activity-cloud">
              {activities.map(([activity], index) => (
                <span key={activity}>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  {activity}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="sg-activities-photo" delay={0.1}>
            <PhotoPanel
              imageId={37}
              alt="Scouts participating in a flag ceremony"
            />
          </Reveal>
        </div>
        <div className="sg-container sg-activity-visuals">
          {activities.slice(1).map(([activity, imageId]) => (
            <PhotoPanel
              key={activity}
              imageId={imageId}
              alt={`${activity} Scout and Guide activity`}
            />
          ))}
        </div>
      </section>

      <ScoutGallery />

      <section className="sg-section sg-service">
        <div className="sg-container sg-split sg-split--reverse">
          <Reveal>
            <PhotoPanel
              imageId={15}
              alt="Students participating in community service"
              className="sg-photo-panel--portrait"
            />
          </Reveal>
          <Reveal className="sg-service-copy" delay={0.1}>
            <p className="sg-eyebrow">Community and citizenship</p>
            <h2>
              Service Before <em>Self</em>
            </h2>
            <p>
              Service is a core part of the Hindustan programme. Through
              age-appropriate activities, students practise empathy, cooperation
              and responsibility while contributing to their school, locality
              and environment.
            </p>
            <ul>
              {[
                "Cleanliness and environmental awareness",
                "Tree plantation and care for nature",
                "Helping community members",
                "Public awareness and local social initiatives",
              ].map((item) => (
                <li key={item}>
                  <HeartHandshake size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="sg-container sg-service-stories">
          {serviceStories.map(([title, text, imageId]) => (
            <Reveal className="sg-service-story" key={title}>
              <PhotoPanel
                imageId={imageId}
                alt={`${title} Scout and Guide activity`}
              />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sg-adventure">
        <PhotoPanel imageId={5} alt="Scouts exploring an adventure trek" />
        <div className="sg-adventure-overlay" />
        <Reveal className="sg-container sg-adventure-content">
          <p className="sg-eyebrow sg-eyebrow--light">Nature and adventure</p>
          <h2>
            Learning Beyond <em>Four Walls</em>
          </h2>
          <p>
            Camps, hikes, treks and nature study build observation, endurance,
            self-reliance and outdoor teamwork. The Association also includes
            conservation and yoga in its progressive training approach.
          </p>
          <div>
            {[Mountain, TreePine, Users, Leaf].map((icon, index) => (
              <span key={index}>{createElement(icon)}</span>
            ))}
          </div>
        </Reveal>
        <div className="sg-container sg-adventure-strip">
          {adventureImageIds.map((imageId) => (
            <PhotoPanel
              key={imageId}
              imageId={imageId}
              alt="Scout and Guide outdoor adventure"
            />
          ))}
        </div>
      </section>

      <section className="sg-section sg-outcomes">
        <div className="sg-topo" aria-hidden="true" />
        <div className="sg-container">
          <SectionHeading
            eyebrow="Lasting outcomes"
            title="Preparing Students"
            accent="Beyond the Classroom"
            description="Hindustan Scouts & Guides training connects personal discipline with service, practical capability and national integration."
          />
          <div className="sg-outcome-grid">
            {outcomes.map(([title, text, icon], index) => (
              <Reveal
                className={`sg-outcome-card sg-outcome-card--${(index % 4) + 1}`}
                key={title}
                delay={index * 0.045}
              >
                {createElement(icon)}
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-values-band" aria-label="Scouting values">
        <div className="sg-container">
          {valueCounters.map((value, index) => (
            <Reveal
              key={value}
              className="sg-value-counter"
              delay={index * 0.06}
            >
              <b>{String(index + 1).padStart(2, "0")}</b>
              <span>{value}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sg-section sg-school">
        <div className="sg-container sg-split">
          <Reveal className="sg-school-copy">
            <p className="sg-eyebrow">Hindustan Scouts &amp; Guides at SRPS</p>
            <h2>
              Scout &amp; Guide at <em>Shree Ram Public School</em>
            </h2>
            <p>
              At Shree Ram Public School, Scout &amp; Guide participation gives
              students a practical setting in which to practise the values of
              Hindustan Scouts &amp; Guides Association.
            </p>
            <p>
              Through training, drill, outdoor activities, good turns, service,
              environmental care and teamwork, students learn to take
              responsibility and contribute constructively.
            </p>
            <p>
              The aim is not only participation in an activity, but the steady
              development of disciplined, compassionate and capable citizens.
            </p>
          </Reveal>
          <Reveal className="sg-school-collage" delay={0.1}>
            <PhotoPanel imageId={4} alt="Scouts and Guides learning together" />
            <span className="sg-school-badge">
              <Sparkles /> Learn • Serve • Lead
            </span>
          </Reveal>
        </div>
      </section>

      <section className="sg-quote">
        <div className="sg-container">
          <Quote aria-hidden="true" />
          <blockquote>
            “Prepared for challenges. Committed to service. Ready to lead.”
          </blockquote>
          <p>An original expression of the Scout &amp; Guide spirit</p>
        </div>
      </section>

      <section className="sg-section sg-cta">
        <PhotoPanel
          imageId={50}
          alt="Students looking toward a bright future"
          className="sg-cta-photo"
          eager
        />
        <div className="sg-topo" aria-hidden="true" />
        <Reveal className="sg-container sg-cta-inner">
          <p className="sg-eyebrow">The journey continues</p>
          <h2>
            Building Responsible Citizens, <em>One Experience at a Time.</em>
          </h2>
          <p>
            Encouraging every student to embrace service, discipline, teamwork
            and leadership.
          </p>
          <div>
            <Link to="/extra-curricular" className="sg-button sg-button--gold">
              Explore school activities <ArrowRight size={18} />
            </Link>
            <button
              type="button"
              className="sg-button sg-button--light"
              onClick={openModal}
            >
              Contact school
            </button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
