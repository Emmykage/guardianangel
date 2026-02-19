import { useState } from "react";
import Navbar from "../../components/nav/Navbar";

const newsData = [
  {
    id: 1,
    category: "Academic",
    tag: "Achievement",
    date: "Feb 15, 2026",
    title: "Our Students Win Regional Science Olympiad",
    excerpt:
      "Twelve students from Grades 9–12 brought home gold at the tri-county Science Olympiad, placing first in five of seven events.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543559563b1e?w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    category: "Community",
    tag: "Spotlight",
    date: "Feb 10, 2026",
    title: "Library Wing Renovation Complete",
    excerpt:
      "After six months of construction, the newly redesigned library opens with expanded reading rooms, a maker space, and digital resource stations.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    category: "Sports",
    tag: "Results",
    date: "Feb 6, 2026",
    title: "Varsity Basketball Advances to State Playoffs",
    excerpt:
      "The Eagles defeated Westbrook High 68–54 in the semifinal, clinching a spot in this year's state championship bracket.",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    category: "Arts",
    tag: "Upcoming",
    date: "Jan 28, 2026",
    title: "Spring Drama Production: A Midsummer Night's Dream",
    excerpt:
      "Tickets are now on sale for the drama department's ambitious spring production, running March 14–16 in the main auditorium.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
    featured: false,
  },
];

const eventsData = [
  {
    id: 1,
    month: "FEB",
    day: "24",
    title: "Parent-Teacher Conference",
    time: "3:00 PM – 7:00 PM",
    location: "Main Building, Room 101–120",
    type: "Academic",
  },
  {
    id: 2,
    month: "MAR",
    day: "01",
    title: "Spring Carnival & Fundraiser",
    time: "11:00 AM – 4:00 PM",
    location: "School Grounds",
    type: "Community",
  },
  {
    id: 3,
    month: "MAR",
    day: "08",
    title: "College Fair 2026",
    time: "9:00 AM – 2:00 PM",
    location: "Sports Hall",
    type: "Academic",
  },
  {
    id: 4,
    month: "MAR",
    day: "14",
    title: "Spring Drama: Night 1",
    time: "6:30 PM",
    location: "Main Auditorium",
    type: "Arts",
  },
  {
    id: 5,
    month: "MAR",
    day: "22",
    title: "Junior Honors Ceremony",
    time: "5:00 PM",
    location: "Gymnasium",
    type: "Academic",
  },
];

const categoryColors = {
  Academic: "bg-sky-100 text-sky-700",
  Community: "bg-emerald-100 text-emerald-700",
  Sports: "bg-orange-100 text-orange-700",
  Arts: "bg-violet-100 text-violet-700",
};

const eventTypeColors = {
  Academic: "border-sky-400 bg-sky-50",
  Community: "border-emerald-400 bg-emerald-50",
  Sports: "border-orange-400 bg-orange-50",
  Arts: "border-violet-400 bg-violet-50",
};

const eventDateColors = {
  Academic: "bg-sky-500",
  Community: "bg-emerald-500",
  Sports: "bg-orange-500",
  Arts: "bg-violet-500",
};

const filters = ["All", "Academic", "Community", "Sports", "Arts"];

export default function SchoolNewsEvents() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("news");

  const filteredNews =
    activeFilter === "All"
      ? newsData
      : newsData.filter((n) => n.category === activeFilter);

  const filteredEvents =
    activeFilter === "All"
      ? eventsData
      : eventsData.filter((e) => e.type === activeFilter);

  const featured = newsData.find((n) => n.featured);
  const rest = filteredNews.filter((n) => !n.featured);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#f9f6f0",
      }}
    >
      <Navbar />
      <div
        className="relative overflow-hidden py-28"
        style={{
          background:
            "linear-gradient(135deg, #1a2e4a 0%, #2d4a73 60%, #1a3a5c 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #f0c040, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-96 h-32 opacity-5"
          style={{
            background: "radial-gradient(ellipse, #ffffff, transparent)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-2"
            style={{ color: "#f0c040", fontFamily: "system-ui, sans-serif" }}
          >
            Westfield Academy
          </p>
          <h1
            className="text-5xl font-bold text-white mb-3"
            style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            News & Events
          </h1>
          <p
            className="text-blue-200 text-lg max-w-xl"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
          >
            Stories, achievements, and upcoming moments from our school
            community.
          </p>

          {/* Tabs */}
          <div
            className="flex gap-2 mt-8"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            {["news", "events"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  activeTab === tab
                    ? { background: "#f0c040", color: "#1a2e4a" }
                    : { background: "rgba(255,255,255,0.12)", color: "#cbd5e1" }
                }
              >
                {tab === "news" ? "Latest News" : "Upcoming Events"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Header Banner */}

      {/* Filter bar */}
      <div
        className="max-w-6xl mt-10 mx-auto px-6 py-5 flex items-center gap-2 flex-wrap"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mr-2">
          Filter:
        </span>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150"
            style={
              activeFilter === f
                ? {
                    background: "#1a2e4a",
                    color: "white",
                    borderColor: "#1a2e4a",
                  }
                : {
                    background: "white",
                    color: "#475569",
                    borderColor: "#e2e8f0",
                  }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* ── NEWS TAB ── */}
        {activeTab === "news" && (
          <div>
            {/* Featured Story */}
            {featured &&
              (activeFilter === "All" ||
                activeFilter === featured.category) && (
                <div
                  className="mb-10 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row"
                  style={{ background: "white", border: "1px solid #e8e2d8" }}
                >
                  <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                      style={{ transition: "transform 0.4s ease" }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.04)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded"
                        style={{
                          background: "#f0c040",
                          color: "#1a2e4a",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div
                      className="flex items-center gap-3 mb-4"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      <span
                        className={`text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded ${categoryColors[featured.category]}`}
                      >
                        {featured.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {featured.date}
                      </span>
                    </div>
                    <h2
                      className="text-2xl font-bold mb-3"
                      style={{ color: "#1a2e4a", lineHeight: 1.3 }}
                    >
                      {featured.title}
                    </h2>
                    <p
                      className="text-gray-500 leading-relaxed mb-6"
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "0.95rem",
                      }}
                    >
                      {featured.excerpt}
                    </p>
                    <button
                      className="self-start px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                      style={{
                        background: "#1a2e4a",
                        color: "white",
                        fontFamily: "system-ui, sans-serif",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.background = "#2d4a73")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.background = "#1a2e4a")
                      }
                    >
                      Read Full Story →
                    </button>
                  </div>
                </div>
              )}

            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <div
                  key={article.id}
                  className="rounded-2xl overflow-hidden shadow-sm group cursor-pointer transition-all duration-200"
                  style={{
                    background: "white",
                    border: "1px solid #e8e2d8",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(26,46,74,0.12)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 1px 3px rgba(0,0,0,0.05)")
                  }
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div
                      className="flex items-center gap-2 mb-3"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      <span
                        className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${categoryColors[article.category]}`}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {article.date}
                      </span>
                    </div>
                    <h3
                      className="font-bold mb-2 leading-snug group-hover:underline"
                      style={{
                        color: "#1a2e4a",
                        fontSize: "1.05rem",
                        textDecorationColor: "#f0c040",
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="text-gray-500 text-sm leading-relaxed"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {article.excerpt}
                    </p>
                    <button
                      className="mt-4 text-xs font-bold uppercase tracking-widest"
                      style={{
                        color: "#2d4a73",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div
                className="text-center py-20 text-gray-400"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                No news articles in this category.
              </div>
            )}
          </div>
        )}

        {/* ── EVENTS TAB ── */}
        {activeTab === "events" && (
          <div className="space-y-4">
            {filteredEvents.length === 0 && (
              <div
                className="text-center py-20 text-gray-400"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                No events in this category.
              </div>
            )}
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`flex items-center gap-5 rounded-2xl p-5 border-l-4 cursor-pointer transition-all duration-200 shadow-sm ${eventTypeColors[event.type]}`}
                style={{ borderColor: "" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 6px 24px rgba(26,46,74,0.10)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(0,0,0,0.05)")
                }
              >
                {/* Date badge */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center text-white shadow-md ${eventDateColors[event.type]}`}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {event.month}
                  </span>
                  <span
                    className="text-2xl font-bold leading-none"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {event.day}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${categoryColors[event.type]}`}
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {event.type}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "#1a2e4a" }}
                  >
                    {event.title}
                  </h3>
                  <div
                    className="flex flex-wrap gap-4 mt-1 text-sm text-gray-500"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    <span>🕐 {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold hidden sm:block transition-all duration-150"
                  style={{
                    background: "#1a2e4a",
                    color: "white",
                    fontFamily: "system-ui, sans-serif",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#2d4a73")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#1a2e4a")
                  }
                >
                  Details
                </button>
              </div>
            ))}

            {/* View Full Calendar CTA */}
            {filteredEvents.length > 0 && (
              <div className="text-center pt-6">
                <button
                  className="px-8 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-200"
                  style={{
                    borderColor: "#1a2e4a",
                    color: "#1a2e4a",
                    fontFamily: "system-ui, sans-serif",
                    background: "transparent",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#1a2e4a";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#1a2e4a";
                  }}
                >
                  View Full Calendar
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
