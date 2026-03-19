import { useEffect, useState, useMemo } from "react";
import { FaCalendarAlt, FaCheckCircle, FaSearch, FaFilter, FaTimesCircle } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// ----- ADVANCED CALENDAR DATA (same structure, enriched with categories) -----
const calendarMonths = [
  {
    name: "April 2026",
    year: 2026,
    month: 3,
    workingDays: 18,
    activities: [
      "Pre-Primary: Colour Day Celebration",
      "Primary: Handwriting Competition",
      "Upper Primary: Essay Competition",
      "Secondary/Sr.Secondary: Debate",
      "Eco Club: Earth Day Celebration",
    ],
    events: {
      1: { name: "Colour Day Celebration", type: "competition" },
      3: { name: "GOOD FRIDAY", type: "holiday" },
      14: { name: "AMBEDKAR JAYANTI", type: "holiday" },
      15: { name: "Handwriting Competition", type: "competition" },
      22: { name: "Essay Competition / Earth Day Celebration", type: "competition" },
      29: { name: "Debate", type: "competition" },
    },
  },
  {
    name: "May 2026",
    year: 2026,
    month: 4,
    workingDays: 20,
    activities: [
      "Pre-Primary: Rhymes Recitation",
      "Primary: Drawing & Coloring Competition",
      "Upper Primary: English Debate Competition",
      "Secondary/Sr.Secondary: Best Out Of Waste",
      "Health Club: No Tobacco Day",
    ],
    events: {
      1: { name: "BUDH PURNIMA", type: "holiday" },
      6: { name: "Rhymes Recitation", type: "competition" },
      13: { name: "Drawing & Coloring Competition", type: "competition" },
      20: { name: "English Debate Competition", type: "competition" },
      24: { name: "MAHRSHI KASHYAP JAYANTI", type: "holiday" },
      27: { name: "ID UL JUHA / Best Out Of Waste", type: "holiday" },
      31: { name: "No Tobacco Day", type: "awareness" },
    },
  },
  {
    name: "June 2026",
    year: 2026,
    month: 5,
    workingDays: 0,
    activities: ["Yoga Club: International Yoga Day Celebration"],
    events: {
      17: { name: "MAHARANA PARTAP JAYANTI", type: "holiday" },
      18: { name: "GURU ARJAN DEV JAYANTI", type: "holiday" },
      21: { name: "International Yoga Day Celebration", type: "activity" },
      26: { name: "MUHARRAM", type: "holiday" },
      29: { name: "SANT KABIR JAYANTI", type: "holiday" },
    },
  },
  {
    name: "July 2026",
    year: 2026,
    month: 6,
    workingDays: 21,
    activities: [
      "Pre-Primary: Clay Modeling",
      "Primary: Poem Recitation",
      "Upper Primary: Science Quiz",
      "Secondary/Sr.Secondary: Science Experiment Activity",
    ],
    events: {
      8: { name: "Clay Modeling", type: "competition" },
      15: { name: "Poem Recitation", type: "competition" },
      22: { name: "Science Quiz", type: "competition" },
      29: { name: "Science Experiment Activity", type: "competition" },
      31: { name: "UDHAM SINGH JAYNTI", type: "holiday" },
    },
  },
  {
    name: "August 2026",
    year: 2026,
    month: 7,
    workingDays: 19,
    activities: [
      "Pre-Primary: Fancy Dress Competition",
      "Primary: Poster Making",
      "Upper Primary: Rakhi Making Competition",
      "Secondary/Sr.Secondary: Independence Day Speech",
      "NCC Club: Independence Day Celebration",
    ],
    events: {
      5: { name: "Fancy Dress Competition", type: "competition" },
      12: { name: "Poster making Competition", type: "competition" },
      15: { name: "INDEPENDENCE DAY", type: "holiday" },
      19: { name: "Rakhi Making", type: "competition" },
      26: { name: "EID A MILAN", type: "holiday" },
      28: { name: "RAKSHYA BANDHAN", type: "holiday" },
    },
  },
  {
    name: "September 2026",
    year: 2026,
    month: 8,
    workingDays: 20,
    activities: [],
    events: {
      1: { name: "Fruits and Veg. Identification", type: "activity" },
      4: { name: "JAMASTHAMI", type: "holiday" },
      5: { name: "Teacher Day Event", type: "activity" },
      9: { name: "Hindi Story Telling", type: "competition" },
      23: { name: "SHEEDI DIWAS", type: "holiday" },
    },
  },
  {
    name: "October 2026",
    year: 2026,
    month: 9,
    workingDays: 19,
    activities: [
      "Pre-Primary: Diya Decoration",
      "Primary: Diya Decoration",
      "Upper Primary: Best Out of Waste",
      "Secondary/Sr.Secondary: Rangoli Competition",
      "Whole School: Gandhi Jayanti Activity",
    ],
    events: {
      2: { name: "GANDHI JAYANTI", type: "holiday" },
      7: { name: "Diya Decoration", type: "competition" },
      11: { name: "AGRISHEN JAYNTI", type: "holiday" },
      14: { name: "Best Out of Waste", type: "competition" },
      20: { name: "DUSSEHRA", type: "holiday" },
      26: { name: "VALMIKI JAYNTI", type: "holiday" },
      28: { name: "Rangoli Competition", type: "competition" },
      29: { name: "KARWA CHOUTH", type: "holiday" },
    },
  },
  {
    name: "November 2026",
    year: 2026,
    month: 10,
    workingDays: 18,
    activities: [
      "Pre-Primary: Story Telling Competition",
      "Primary: GK Quiz Competition",
      "Upper Primary: English Quiz Competition",
      "Secondary/Sr.Secondary: Gk./SS Competition",
      "Whole School: Deepawali Celebration",
    ],
    events: {
      1: { name: "HARYANA DIWAS", type: "holiday" },
      4: { name: "Story Telling Competition", type: "competition" },
      8: { name: "DIPAWALI", type: "holiday" },
      9: { name: "VISHWA KRMA DAY", type: "holiday" },
      11: { name: "GK Quiz Competition", type: "competition" },
      18: { name: "English Quiz Competition", type: "competition" },
      24: { name: "GURU NANAK DEV JAYANTI", type: "holiday" },
      25: { name: "Gk./SS Competition", type: "competition" },
    },
  },
  {
    name: "December 2026",
    year: 2026,
    month: 11,
    workingDays: 20,
    activities: [
      "Pre-Primary: Patriotic Song Competition",
      "Primary: Dance Competition",
      "Upper Primary: Maths Quiz Competition",
      "Secondary/Sr.Secondary: Maths quiz Competition",
    ],
    events: {
      9: { name: "Patriotic Song Competition", type: "competition" },
      14: { name: "GURU TEGBHADUR SHIDI DIWAS", type: "holiday" },
      16: { name: "Dance Competition", type: "competition" },
      23: { name: "Maths Quiz Competition", type: "competition" },
      25: { name: "CHRISTMAS", type: "holiday" },
      26: { name: "SHEED UDHAM SINGH JAYANTI", type: "holiday" },
    },
  },
  {
    name: "January 2027",
    year: 2027,
    month: 0,
    workingDays: 10,
    activities: [
      "Pre-Primary: Action Song Dance competition",
      "Primary: Action Song Dance competition",
      "Upper Primary: Republic Day Celebration",
      "Secondary/Sr.Secondary: Republic Day Celebration",
      "Whole School: Republic Day Celebration",
    ],
    events: {
      14: { name: "MAKAR SKRANTI", type: "holiday" },
      20: { name: "Action Song Dance competition", type: "competition" },
      25: { name: "Republic Day Celebration", type: "activity" },
      26: { name: "REPUBLIC DAY", type: "holiday" },
    },
  },
  {
    name: "February 2027",
    year: 2027,
    month: 1,
    workingDays: 19,
    activities: [],
    events: {
      3: { name: "Drawing & Coloring Competition", type: "competition" },
      10: { name: "Science Model Competition", type: "competition" },
      11: { name: "BASANT PANCHMI", type: "holiday" },
      19: { name: "SHIVAJI JAYANTI", type: "holiday" },
    },
  },
  {
    name: "March 2027",
    year: 2027,
    month: 2,
    workingDays: 23,
    activities: ["Whole School: Final Exam Celebration (12th to 20th March)"],
    events: {
      6: { name: "MAHA SHIVARATRI", type: "holiday" },
      10: { name: "RAMJAAN EID", type: "holiday" },
      22: { name: "HOLI", type: "holiday" },
      26: { name: "GOOD FRIDAY", type: "holiday" },
    },
  },
];

// ----- STATS & FALLBACK (dynamic) -----
const totalWorkingDays = calendarMonths.reduce((acc, m) => acc + m.workingDays, 0);
const totalEvents = calendarMonths.reduce((acc, m) => acc + Object.keys(m.events).length, 0);
const totalActivities = calendarMonths.reduce((acc, m) => acc + m.activities.length, 0);

const FALLBACK = {
  badge: "Academic Desk",
  title: "Academic Calendar 2026-27",
  subtitle: "Shree Ram Public School, Kanhra-Badhra – advanced interactive planner",
  stats: [
    { value: calendarMonths.length.toString().padStart(2, "0"), label: "Months" },
    { value: totalWorkingDays.toString().padStart(2, "0"), label: "Working Days" },
    { value: totalEvents.toString().padStart(2, "0"), label: "Events" },
    { value: totalActivities.toString().padStart(2, "0"), label: "Activities" },
  ],
};

// ----- Helper to build month grid (same) -----
const generateDaysArray = (year, month, eventsMap) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  let startOffset = firstDay.getDay() - 1;
  if (startOffset < 0) startOffset = 6;

  const days = [];
  for (let i = 0; i < startOffset; i++) days.push({ date: null, dayOfMonth: null, event: null });
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({
      date: new Date(year, month, d),
      dayOfMonth: d,
      event: eventsMap[d] || null,
    });
  }
  return days;
};

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// ----- Type color mapping -----
const typeColors = {
  holiday: { bg: "#fee2e2", text: "#991b1b", dot: "#ef4444" },
  competition: { bg: "#e0f2fe", text: "#0369a1", dot: "#0ea5e9" },
  activity: { bg: "#dcfce7", text: "#166534", dot: "#22c55e" },
  awareness: { bg: "#fef9c3", text: "#854d0e", dot: "#eab308" },
  default: { bg: "#f1f5f9", text: "#334155", dot: "#94a3b8" },
};

export default function AcademicCalendarPage() {
  const [data, setData] = useState(FALLBACK);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all"); // all, holiday, competition, activity, awareness
  const [selectedMonth, setSelectedMonth] = useState(null); // for modal

  // Simulate loading (replace with actual API if needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Filter events across all months based on search & type
  const filteredMonths = useMemo(() => {
    if (!searchTerm && filterType === "all") return calendarMonths;

    return calendarMonths.map(month => {
      // Filter events inside month
      const filteredEvents = Object.fromEntries(
        Object.entries(month.events).filter(([_, ev]) => {
          const matchesSearch = ev.name.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesType = filterType === "all" || ev.type === filterType;
          return matchesSearch && matchesType;
        })
      );
      // Also filter activities? For simplicity we keep activities as is, but you could filter them too.
      return { ...month, events: filteredEvents };
    }).filter(month => Object.keys(month.events).length > 0 || month.activities.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))); // keep month if any event or activity matches
  }, [searchTerm, filterType]);

  const totalFilteredEvents = filteredMonths.reduce((acc, m) => acc + Object.keys(m.events).length, 0);

  return (
    <>
      <style>{`
        .ac-page {
          min-height: 100vh;
          padding: 30px 20px 60px;
          background: radial-gradient(circle at 10% 30%, #f0f5fa, #e6edf4);
          font-family: 'Inter', 'Jost', sans-serif;
        }
        .ac-wrap {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Hero with glass effect */
        .ac-hero {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 36px;
          padding: 28px 32px;
          color: white;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          margin-bottom: 24px;
        }
        .ac-badge {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          padding: 6px 16px;
          border-radius: 40px;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          display: inline-block;
          margin-bottom: 14px;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .ac-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin: 0 0 8px;
          background: linear-gradient(120deg, #fff, #d9e2ef);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ac-hero p {
          font-size: 1.1rem;
          opacity: 0.85;
          max-width: 700px;
        }

        /* stats cards with glow */
        .ac-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
          margin: 32px 0 28px;
        }
        .ac-stat {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 28px;
          padding: 20px 12px;
          text-align: center;
          box-shadow: 0 10px 20px -10px rgba(0,20,40,0.2);
          transition: 0.2s;
        }
        .ac-stat:hover {
          transform: translateY(-4px);
          background: rgba(255,255,255,0.9);
          box-shadow: 0 20px 30px -8px #1e3a8a40;
        }
        .ac-stat strong {
          display: block;
          font-size: 2.2rem;
          font-weight: 700;
          color: #0f3d59;
          line-height: 1.2;
        }
        .ac-stat span {
          color: #2c4c6e;
          font-weight: 500;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* search & filter bar */
        .ac-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 24px 0 20px;
          align-items: center;
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(8px);
          border-radius: 60px;
          padding: 8px 8px 8px 20px;
          border: 1px solid rgba(255,255,255,0.9);
        }
        .ac-search {
          flex: 2 1 260px;
          display: flex;
          align-items: center;
          background: white;
          border-radius: 40px;
          padding: 0 16px;
          border: 1px solid #dce5ec;
        }
        .ac-search svg { color: #7f8fa3; margin-right: 8px; }
        .ac-search input {
          border: none;
          background: transparent;
          padding: 12px 0;
          width: 100%;
          font-size: 0.95rem;
          outline: none;
        }
        .ac-filter {
          flex: 1 1 180px;
          display: flex;
          align-items: center;
          background: white;
          border-radius: 40px;
          padding: 0 16px;
          gap: 8px;
          border: 1px solid #dce5ec;
        }
        .ac-filter svg { color: #7f8fa3; }
        .ac-filter select {
          border: none;
          background: transparent;
          padding: 12px 0;
          width: 100%;
          font-size: 0.95rem;
          outline: none;
          cursor: pointer;
        }
        .ac-clear {
          background: white;
          border-radius: 40px;
          border: 1px solid #dce5ec;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: #3b5e7e;
          cursor: pointer;
          transition: 0.15s;
        }
        .ac-clear:hover { background: #f1f6fb; border-color: #9bb0c7; }

        /* month grid */
        .months-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
          margin-top: 20px;
        }
        .month-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(12px);
          border-radius: 36px;
          border: 1px solid rgba(255,255,255,0.8);
          overflow: hidden;
          box-shadow: 0 18px 36px -12px rgba(15,23,42,0.2);
          transition: all 0.3s ease;
        }
        .month-card:hover {
          transform: scale(1.02);
          background: rgba(255,255,255,0.9);
          box-shadow: 0 25px 40px -12px #1e293b80;
        }
        .month-header {
          background: linear-gradient(115deg, #1e2b3c, #153b5c);
          padding: 20px 22px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .month-header h3 {
          font-size: 1.6rem;
          font-weight: 600;
          margin: 0;
          letter-spacing: -0.3px;
        }
        .working-badge {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          padding: 6px 14px;
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .activities-preview {
          padding: 18px 20px 10px;
          background: rgba(245, 250, 255, 0.6);
          border-bottom: 1px solid #dde5ed;
        }
        .activities-preview strong {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #456f9c;
        }
        .activities-preview ul {
          margin: 10px 0 4px;
          padding-left: 20px;
          color: #1f3a57;
          font-size: 0.9rem;
        }
        .activities-preview li {
          margin-bottom: 4px;
        }
        .calendar-grid {
          padding: 16px 16px 20px;
        }
        .weekdays {
          display: grid;
          grid-template-columns: repeat(7,1fr);
          text-align: center;
          font-weight: 600;
          font-size: 0.75rem;
          color: #54738f;
          margin-bottom: 8px;
        }
        .days-grid {
          display: grid;
          grid-template-columns: repeat(7,1fr);
          gap: 4px;
        }
        .day-cell {
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #1f3a57;
          position: relative;
          cursor: help;
          border: 1px solid transparent;
          transition: 0.1s;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .day-cell:hover {
          border-color: #3b82f6;
          background: #eef4ff;
          transform: scale(1.1);
          z-index: 5;
        }
        .day-cell.has-event {
          background: #f0f7ff;
          font-weight: 600;
        }
        .event-dot {
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }
        .tooltip {
          position: absolute;
          bottom: 120%;
          left: 50%;
          transform: translateX(-50%);
          background: #1e293b;
          color: white;
          font-size: 0.7rem;
          padding: 6px 12px;
          border-radius: 24px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: 0.2s;
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
          z-index: 100;
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
        }
        .day-cell:hover .tooltip {
          opacity: 1;
          bottom: 130%;
        }

        .empty-search {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          background: rgba(255,255,255,0.5);
          border-radius: 60px;
          color: #416481;
          font-size: 1.2rem;
        }
        .ac-err {
          background: #fff3cd;
          border: 1px solid #ffe69c;
          color: #997404;
          border-radius: 40px;
          padding: 14px 24px;
        }
        @media (max-width: 680px) {
          .ac-stats { grid-template-columns: repeat(2,1fr); }
          .ac-controls { border-radius: 30px; }
        }
      `}</style>

      <main className="ac-page">
        <div className="ac-wrap">
          {/* HERO */}
          <section className="ac-hero">
            <span className="ac-badge">{data.badge}</span>
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
          </section>

          {loading && <p style={{textAlign:'center', padding: 40 }}>✨ Loading immersive calendar...</p>}
          {!loading && error && <div className="ac-err">{error}</div>}

          {!loading && (
            <>
              {/* STATS */}
              <section className="ac-stats">
                {data.stats.map((item) => (
                  <article key={item.label} className="ac-stat">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </section>

              {/* SEARCH & FILTER */}
              <div className="ac-controls">
                <div className="ac-search">
                  <FaSearch />
                  <input
                    type="text"
                    placeholder="Search events or activities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="ac-filter">
                  <FaFilter />
                  <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                    <option value="all">All types</option>
                    <option value="holiday">Holidays</option>
                    <option value="competition">Competitions</option>
                    <option value="activity">Activities</option>
                    <option value="awareness">Awareness</option>
                  </select>
                </div>
                {(searchTerm || filterType !== "all") && (
                  <div className="ac-clear" onClick={() => { setSearchTerm(""); setFilterType("all"); }}>
                    <FaTimesCircle /> Clear
                  </div>
                )}
                <div style={{ marginLeft: 'auto', fontSize: '0.9rem', color: '#2d4b6e', paddingRight: 12 }}>
                  {totalFilteredEvents} event{totalFilteredEvents!==1?'s':''} shown
                </div>
              </div>

              {/* MONTH GRID */}
              <section className="months-grid">
                {filteredMonths.length === 0 && (
                  <div className="empty-search">
                    🕵️ No matching events found. Try different keywords.
                  </div>
                )}

                {filteredMonths.map((month) => {
                  const days = generateDaysArray(month.year, month.month, month.events);
                  return (
                    <div key={month.name} className="month-card">
                      <div className="month-header">
                        <h3>{month.name}</h3>
                        <span className="working-badge">{month.workingDays} days</span>
                      </div>

                      {month.activities.length > 0 && (
                        <div className="activities-preview">
                          <strong>📋 MONTHLY ACTIVITIES</strong>
                          <ul>
                            {month.activities.slice(0, 3).map((act, i) => (
                              <li key={i} title={act}>
                                {act.length > 45 ? act.slice(0, 45) + "…" : act}
                              </li>
                            ))}
                            {month.activities.length > 3 && <li>+{month.activities.length - 3} more</li>}
                          </ul>
                        </div>
                      )}

                      <div className="calendar-grid">
                        <div className="weekdays">
                          {weekdays.map(d => <span key={d}>{d}</span>)}
                        </div>
                        <div className="days-grid">
                          {days.map((day, idx) => {
                            if (day.date === null) {
                              return <div key={`e-${idx}`} className="day-cell" style={{ background: 'transparent', boxShadow: 'none' }} />;
                            }
                            const hasEvent = !!day.event;
                            const eventType = day.event?.type || 'default';
                            const colors = typeColors[eventType] || typeColors.default;
                            return (
                              <div
                                key={day.date.toISOString()}
                                className={`day-cell ${hasEvent ? 'has-event' : ''}`}
                                style={hasEvent ? { background: colors.bg, color: colors.text } : {}}
                              >
                                {day.dayOfMonth}
                                {hasEvent && <span className="event-dot" style={{ background: colors.dot }} />}
                                {hasEvent && <span className="tooltip">{day.event.name}</span>}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {month.name === "March 2027" && (
                        <div style={{ padding: "4px 20px 16px", fontSize: "0.8rem", color: "#4d6a86" }}>
                          📘 Final Exams: 12–20 Mar
                        </div>
                      )}
                    </div>
                  );
                })}
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
}