import React from "react";
import { education } from "../data.js";

export default function Education() {
  return (
    <section className="section education">
      <div className="container">
        <div className="education__row">
          <span className="eyebrow">GET /education</span>
          <div className="education__list">
            {education.map((e) => (
              <div className="education__item" key={e.degree}>
                <span className="education__degree">{e.degree}</span>
                <span className="education__dot">&middot;</span>
                <span className="education__school">{e.school}</span>
                <span className="education__period">{e.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .education { padding: 56px 0; }
        .education__row {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .education__list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .education__item {
          font-size: 14.5px;
          color: var(--text-muted);
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 8px;
        }
        .education__degree {
          color: var(--text);
          font-weight: 500;
        }
        .education__dot { color: var(--text-faint); }
        .education__period {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--text-faint);
        }
      `}</style>
    </section>
  );
}
