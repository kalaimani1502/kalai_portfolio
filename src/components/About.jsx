import React from "react";
import { stats } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">GET /about</span>
          <h2 className="section-title">Backend-first, with full-stack understanding</h2>
          <p className="section-sub">
            I've spent most of my career building the parts of applications that power everything behind the interface — APIs, business logic, databases, integrations, and production systems. Over the years, I've also developed a strong understanding of how frontend and backend systems need to work together.

            My primary strength is backend engineering and technical ownership rather than UI development — designing APIs, solving complex problems, understanding application flows, and guiding frontend developers on what the backend needs and how the pieces should integrate.

            With experience working closely with international clients and across multiple projects, I enjoy turning business requirements into practical technical solutions and helping teams move from requirement → implementation → production.  </p>
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
