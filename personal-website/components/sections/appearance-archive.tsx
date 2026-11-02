"use client";

import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { appearances, type Appearance } from "@/lib/appearances";

const formats = [
  "All appearances",
  "Talks & panels",
  "Workshops",
  "Salons & community",
] as const;
export function AppearanceArchive() {
  const [format, setFormat] =
    useState<(typeof formats)[number]>("All appearances");
  const [search, setSearch] = useState("");
  const query = search.trim().toLowerCase();
  const filtered = appearances.filter(
    (event: Appearance) =>
      (format === "All appearances" || event.format === format) &&
      `${event.title} ${event.date} ${event.role} ${event.location}`
        .toLowerCase()
        .includes(query),
  );
  return (
    <div>
      <div className="pv-filters" role="group" aria-label="Filter appearances">
        {formats.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={format === item}
            onClick={() => setFormat(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="pv-search-row">
        <label className="pv-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Search appearances</span>
          <input
            type="search"
            placeholder="Search events, topics, or places"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <p className="pv-count" role="status">
          {filtered.length}{" "}
          {filtered.length === 1 ? "appearance" : "appearances"}
        </p>
      </div>
      <div className="pv-appearances">
        {filtered.map((event) => (
          <article key={event.url} className="pv-appearance">
            <div className="pv-appearance-date">
              {event.date}
              <span className="pv-role">{event.role}</span>
            </div>
            <div>
              <h2>
                <a href={event.url}>
                  {event.title}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </h2>
              <span className="pv-appearance-place">{event.location}</span>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="pv-empty">No appearances match this search.</p>
      )}
    </div>
  );
}
