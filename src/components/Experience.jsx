import React from "react";
import { experience, earlierWork } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">GET /experience</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">
            Ordered by when it happened — the platform I know best sits at the
            bottom, because it's where three years actually add up.
          </p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <div className={`timeline__item ${job.flagship ? "is-flagship" : ""}`} key={job.org}>
              <div className="timeline__rail">
                <span className="timeline__node" />
              </div>
              <div className="timeline__content card">
                {job.flagship && <span className="timeline__badge">Flagship role</span>}
                <div className="timeline__period">{job.period}</div>
                <h3 className="timeline__title">{job.title}</h3>
                <div className="timeline__org">{job.org}</div>
                <div className="timeline__stack">{job.stack}</div>
                <ul className="timeline__points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="earlier">
          <h3 className="earlier__title">Earlier builds</h3>
          <div className="earlier__grid">
            {earlierWork.map((w) => (
              <div className="earlier__item card" key={w.name}>
                <div className="earlier__name">{w.name}</div>
                <div className="earlier__note">{w.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .timeline__item {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 20px;
        }
        .timeline__rail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline__rail::before {
          content: "";
          width: 1px;
          flex: 1;
          background: var(--border);
        }
        .timeline__item:first-child .timeline__rail::before {
          margin-top: 10px;
        }
        .timeline__node {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--text-faint);
          margin-top: 10px;
          flex-shrink: 0;
        }
        .is-flagship .timeline__node {
          background: var(--accent);
          box-shadow: 0 0 0 4px var(--accent-soft);
        }
        .timeline__content {
          padding: 24px 26px;
          margin-bottom: 24px;
          position: relative;
        }
        .is-flagship .timeline__content {
          border-color: var(--border-strong);
        }
        .timeline__badge {
          position: absolute;
          top: 20px;
          right: 22px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent);
          background: var(--accent-soft);
          padding: 4px 10px;
          border-radius: 999px;
        }
        .timeline__period {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--signal);
          margin-bottom: 10px;
        }
        .timeline__title {
          font-size: 19px;
        }
        .timeline__org {
          margin-top: 4px;
          color: var(--text);
          font-weight: 500;
          font-size: 15px;
        }
        .timeline__stack {
          margin-top: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-faint);
        }
        .timeline__points {
          margin: 16px 0 0;
          padding-left: 18px;
          color: var(--text-muted);
          font-size: 14.5px;
          line-height: 1.7;
        }
        .timeline__points li {
          margin-bottom: 6px;
        }

        .earlier {
          margin-top: 52px;
        }
        .earlier__title {
          font-size: 14px;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 16px;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .earlier__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .earlier__item {
          padding: 16px 18px;
        }
        .earlier__name {
          font-size: 14.5px;
          font-weight: 500;
        }
        .earlier__note {
          margin-top: 6px;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
        }
        @media (max-width: 700px) {
          .timeline__item { grid-template-columns: 14px 1fr; gap: 14px; }
          .earlier__grid { grid-template-columns: 1fr; }
          .timeline__badge { position: static; display: inline-block; margin-bottom: 10px; }
        }
      `}</style>
    </section>
  );
}
