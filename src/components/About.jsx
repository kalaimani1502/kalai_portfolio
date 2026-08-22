import React from "react";
import { stats } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">GET /about</span>
          <h2 className="section-title">Backend-first, but I speak frontend</h2>
          <p className="section-sub">
            I've spent most of my career on the side of the stack that doesn't get
            screenshots — the APIs, the business logic, the database design, the
            3am production issue. But three years on one platform means also
            becoming the person who tells the frontend team what the API actually
            needs from them, and why.
          </p>
        </div>

        <div className="about__stats">
          {stats.map((s) => (
            <div className="about__stat card" key={s.label}>
              <div className="about__value">{s.value}</div>
              <div className="about__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about__stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .about__stat {
          padding: 22px 20px;
        }
        .about__value {
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 700;
          color: var(--accent);
        }
        .about__label {
          margin-top: 6px;
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.4;
        }
        @media (max-width: 760px) {
          .about__stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
