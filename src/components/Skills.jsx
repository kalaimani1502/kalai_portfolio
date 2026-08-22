import React from "react";
import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">GET /skills</span>
          <h2 className="section-title">The stack I build with</h2>
          <p className="section-sub">
            Grouped by what each tool is actually for on a project, not just a
            wall of logos.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((g) => (
            <div className="skills__group card" key={g.title}>
              <h3 className="skills__title">{g.title}</h3>
              <div className="skills__chips">
                {g.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .skills__group {
          padding: 22px;
        }
        .skills__title {
          font-size: 15px;
          color: var(--text);
          margin-bottom: 14px;
        }
        .skills__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        @media (max-width: 860px) {
          .skills__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .skills__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
