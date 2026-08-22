import React from "react";
import { profile } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card card">
          <div className="contact__tag">POST /contact</div>
          <h2 className="contact__title">Let's build something that has to work.</h2>
          <p className="contact__sub">
            Open to Senior Backend Developer, Backend / API Lead, Backend Lead, or Technical Lead roles — reach out directly, no forms.
          </p>

          <div className="contact__grid">
            <a className="contact__link" href={`mailto:${profile.email}`}>
              <span className="contact__k">email</span>
              <span className="contact__v">{profile.email}</span>
            </a>
            <a className="contact__link" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
              <span className="contact__k">phone</span>
              <span className="contact__v">{profile.phone}</span>
            </a>
            <a className="contact__link" href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact__k">github</span>
              <span className="contact__v">github.com/kalaimani1502</span>
            </a>
            <a className="contact__link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact__k">linkedin</span>
              <span className="contact__v">/in/kalaimani-ramasamy</span>
            </a>
            <div className="contact__link contact__link--static">
              <span className="contact__k">location</span>
              <span className="contact__v">{profile.location}</span>
            </div>
          </div>
        </div>

        <footer className="footer">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <span className="footer__sep">&middot;</span>
          <span>Built with React &amp; deployed on GitHub Pages</span>
        </footer>
      </div>

      <style>{`
        .contact__card {
          padding: 48px;
          position: relative;
          overflow: hidden;
        }
        .contact__card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 100% 0%, rgba(245,166,35,0.08), transparent 55%);
          pointer-events: none;
        }
        .contact__tag {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--signal);
          margin-bottom: 16px;
        }
        .contact__title {
          font-size: clamp(24px, 3.2vw, 32px);
          max-width: 20ch;
        }
        .contact__sub {
          margin-top: 14px;
          color: var(--text-muted);
          font-size: 15px;
          max-width: 52ch;
          line-height: 1.6;
        }
        .contact__grid {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .contact__link {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 18px;
          background: var(--bg-elev-2);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          transition: border-color 0.18s ease;
        }
        .contact__link:not(.contact__link--static):hover {
          border-color: var(--accent);
        }
        .contact__k {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-faint);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .contact__v {
          font-size: 14.5px;
          color: var(--text);
        }

        .footer {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-faint);
          font-family: var(--font-mono);
        }
        .footer__sep { color: var(--text-faint); }

        @media (max-width: 640px) {
          .contact__card { padding: 30px 22px; }
          .contact__grid { grid-template-columns: 1fr; }
          .footer { flex-direction: column; text-align: center; gap: 4px; }
        }
      `}</style>
    </section>
  );
}
