import React from "react";
import { flagshipProjects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">GET /projects</span>
          <h2 className="section-title">Things I've built end-to-end</h2>
          <p className="section-sub">
            These are client-owned production systems, so the code isn't public
            — but here's what each one actually involved.
          </p>
        </div>

        <div className="projects__grid">
          {flagshipProjects.map((p) => (
            <div className="projects__card card" key={p.title}>
              <div className="projects__tag">{p.tag}</div>
              <h3 className="projects__title">{p.title}</h3>
              <p className="projects__desc">{p.description}</p>
              <div className="projects__stack">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .projects__card {
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .projects__card:hover {
          border-color: var(--border-strong);
        }
        .projects__tag {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--signal);
        }
        .projects__title {
          font-size: 18px;
        }
        .projects__desc {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.65;
          flex: 1;
        }
        .projects__stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        @media (max-width: 860px) {
          .projects__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
