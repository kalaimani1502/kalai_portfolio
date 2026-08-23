import React from "react";
import { stats } from "../data.js";

export default function About() {
  const focusAreas = [
    {
      title: "API Architecture",
      description:
        "Designing REST APIs, API contracts, validation, authentication, and backend workflows.",
    },
    {
      title: "Backend Engineering",
      description:
        "Building business logic, integrations, database-driven systems, and scalable backend services.",
    },
    {
      title: "Real-Time Systems",
      description:
        "Designing WebSocket-based communication and supporting live application updates.",
    },
    {
      title: "Technical Guidance",
      description:
        "Working with frontend developers on API integration, application flow, debugging, and implementation decisions.",
    },
    {
      title: "Application & Deployment Support",
      description:
        "Debugging application issues, troubleshooting servers, and supporting deployments and ongoing maintenance.",
    },
    {
      title: "Client & Requirements",
      description:
        "Working directly with stakeholders to understand requirements and turn business needs into practical technical solutions.",
    },
    {
      title: "Agile & Team Collaboration",
      description:
        "Working in Agile/Scrum environments through sprint planning, daily stand-ups, requirement discussions, technical coordination, and iterative delivery.",
    },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">

        {/* ABOUT */}
        <div className="section-head">
          <span className="eyebrow">GET /about</span>

          <h2 className="section-title">
            Backend-first, with full-stack understanding
          </h2>

          <p className="section-sub">
            I've spent most of my career building the parts of applications
            that power everything behind the interface — APIs, business logic,
            databases, integrations, and application systems. Over the years,
            I've also developed a strong understanding of how frontend and
            backend systems need to work together.
            <br /><br />
            My primary strength is backend engineering and technical ownership
            rather than UI development — designing APIs, solving complex
            problems, understanding application flows, and guiding frontend
            developers on what the backend needs and how the pieces should
            integrate.
            <br /><br />
            With experience working closely with international clients and
            across multiple projects, I enjoy turning business requirements
            into practical technical solutions and helping teams move from
            requirement → implementation → delivery.
          </p>
        </div>

        {/* STATS */}
        <div className="about__stats">
          {stats.map((s) => (
            <div className="about__stat card" key={s.label}>
              <div className="about__value">{s.value}</div>
              <div className="about__label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* FOCUS */}
        <div className="about__focus">
          <div className="section-head about__focusHead">
            <span className="eyebrow">GET /focus</span>

            <h2 className="section-title">What I actually do</h2>
          </div>

          <div className="about__focusGrid">
            {focusAreas.map((item) => (
              <div className="about__focusItem card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
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

        /* Focus section */

        .about__focus {
          margin-top: 72px;
        }

        .about__focusHead {
          margin-bottom: 28px;
        }

        .about__focusGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .about__focusItem {
          padding: 22px 20px;
        }

        .about__focusItem h3 {
          margin: 0;
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 600;
          color: var(--text);
        }

        .about__focusItem p {
          margin: 10px 0 0;
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .about__focusGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 760px) {
          .about__stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .about__focusGrid {
            grid-template-columns: 1fr;
          }

          .about__stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}