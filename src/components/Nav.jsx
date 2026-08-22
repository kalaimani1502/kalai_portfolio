import React, { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "/about" },
  { id: "skills", label: "/skills" },
  { id: "experience", label: "/experience" },
  { id: "projects", label: "/projects" },
  { id: "contact", label: "/contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__mark" onClick={() => setOpen(false)}>
          <span className="nav__bracket">{"{"}</span>KR<span className="nav__bracket">{"}"}</span>
        </a>

        <nav className="nav__links nav__links--desktop">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "is-active" : ""}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="nav__links nav__links--mobile">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(10, 15, 28, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .nav--scrolled {
          border-bottom-color: var(--border);
          background: rgba(10, 15, 28, 0.86);
        }
        .nav__inner {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav__mark {
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.02em;
        }
        .nav__bracket { color: var(--accent); }
        .nav__links {
          display: flex;
          gap: 28px;
          font-family: var(--font-mono);
          font-size: 13px;
        }
        .nav__links a {
          color: var(--text-muted);
          transition: color 0.15s ease;
          padding: 4px 0;
        }
        .nav__links a:hover { color: var(--text); }
        .nav__links a.is-active { color: var(--accent); }
        .nav__toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
        }
        .nav__toggle span {
          width: 20px;
          height: 2px;
          background: var(--text);
          display: block;
        }
        .nav__links--mobile {
          flex-direction: column;
          gap: 0;
          border-top: 1px solid var(--border);
          background: rgba(10, 15, 28, 0.98);
        }
        .nav__links--mobile a {
          padding: 14px 24px;
          border-bottom: 1px solid var(--border);
        }
        @media (max-width: 720px) {
          .nav__links--desktop { display: none; }
          .nav__toggle { display: flex; }
        }
      `}</style>
    </header>
  );
}
