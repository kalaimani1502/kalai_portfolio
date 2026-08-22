import React from "react";
import { profile } from "../data.js";
import photo from "../assets/photo.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__status">
            <span className="hero__dot" />
            <span className="hero__route">GET /kalaimani</span>
            <span className="hero__arrow">&rarr;</span>
            <span className="hero__code">200 OK</span>
          </div>

          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">
            {profile.role} <span className="hero__dash">&mdash;</span> {profile.tagline}
          </p>

          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="btn" href={profile.resumeFile} download>
              Download résumé
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__aside">
          <div className="hero__photoFrame">
            <img src={photo} alt={profile.name} />
          </div>
          <div className="hero__json card">
            <pre>
{`{
  "role": "`}<span className="j-str">{profile.role}</span>{`",
  "experience": "`}<span className="j-str">{profile.yearsExperience} years</span>{`",
  "location": "`}<span className="j-str">{profile.location}</span>{`",
  "stack": [`}
              <span className="j-str">{profile.stack.map((s) => `"${s}"`).join(", ")}</span>
{`],
  "status": `}<span className="j-bool">"available"</span>{`
}`}
            </pre>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 76px 0 90px;
        }
        .hero__inner {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: start;
        }
        .hero__status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-muted);
          background: var(--bg-elev);
          border: 1px solid var(--border);
          padding: 7px 14px;
          border-radius: 999px;
          margin-bottom: 28px;
        }
        .hero__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 0 3px var(--signal-soft);
          animation: pulse 2.2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
        .hero__route { color: var(--text); }
        .hero__arrow { color: var(--text-faint); }
        .hero__code { color: var(--signal); font-weight: 500; }

        .hero__name {
          font-size: clamp(40px, 6vw, 60px);
          line-height: 1.02;
        }
        .hero__role {
          margin-top: 14px;
          font-size: clamp(17px, 2vw, 20px);
          color: var(--accent);
          font-family: var(--font-display);
          font-weight: 500;
        }
        .hero__dash { color: var(--text-faint); }
        .hero__summary {
          margin-top: 22px;
          max-width: 54ch;
          color: var(--text-muted);
          font-size: 16.5px;
          line-height: 1.7;
        }
        .hero__actions {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero__aside {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .hero__photoFrame {
          width: 168px;
          height: 168px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-strong);
          background: var(--bg-elev);
        }
        .hero__photoFrame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(0.15) contrast(1.03);
        }
        .hero__json {
          padding: 18px 20px;
        }
        .hero__json pre {
          margin: 0;
          font-family: var(--font-mono);
          font-size: 12.5px;
          line-height: 1.75;
          color: var(--text-muted);
          white-space: pre-wrap;
          word-break: break-word;
        }
        .j-str { color: var(--accent-strong); }
        .j-bool { color: var(--signal); }

        @media (max-width: 860px) {
          .hero__inner {
            grid-template-columns: 1fr;
          }
          .hero__aside {
            flex-direction: row;
            align-items: flex-start;
          }
          .hero__photoFrame {
            flex-shrink: 0;
            width: 120px;
            height: 120px;
          }
        }
        @media (max-width: 520px) {
          .hero__aside { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
