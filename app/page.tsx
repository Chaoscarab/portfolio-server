"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const proficiencies = [
  { src: "/javascript-1.svg", alt: "JavaScript" },
  { src: "/python-4.svg", alt: "Python" },
  { src: "/react-2.svg", alt: "React" },
  { src: "/react-native-1.svg", alt: "React Native" },
  { src: "/node-js.svg", alt: "Node.js" },
  { src: "/postgresql.svg", alt: "PostgreSQL" },
  { src: "/mongodb-icon-2.svg", alt: "MongoDB" },
  { src: "/html-1.svg", alt: "HTML" },
  { src: "/css-3.svg", alt: "CSS" },
  { src: "/docker.svg", alt: "Docker" },
  { src: "/aws.svg", alt: "AWS" },
  { src: "/git.svg", alt: "Git" },
];

const projects = [
  {
    image: "/mimosa-color.svg",
    title: "Mimosa Messenger",
    description: "A centralized social media account automation platform.",
    url: "https://mimosamessenger.com/",
    cta: "Visit Site",
    wordmark: true,
  },
  {
    image: "/WaddleMascot.png",
    title: "Waddle",
    description: "One of my first full stack apps.",
    url: "https://github.com/Chaoscarab/Waddle",
    cta: "GitHub",
  },
  {
    image: "/Flask.png",
    title: "Flask-React-Game",
    description: "A simple game I built using Flask.",
    url: "https://github.com/Chaoscarab/Flask-React-Game/tree/main",
    cta: "GitHub",
  },
  {
    image: "/codepenLogo.png",
    title: "Calculator",
    description: "A barebones JavaScript calculator.",
    url: "https://codepen.io/ChaoScarab/pen/XWYgBNr",
    cta: "CodePen",
  },
  
];

const appointmentSchedulerUrl =
  process.env.NEXT_PUBLIC_GOOGLE_APPOINTMENT_URL ??
  "https://calendar.app.google/ynMQmKzwu3gJxy436";

export default function Home() {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  useEffect(() => {
    if (!isSchedulerOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSchedulerOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isSchedulerOpen]);

  return (
    <main className="portfolio-page">
      <header className="portfolio-nav">
        <div className="nav-brand">Brandon VanFossen</div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/resume">
            Resume
          </Link>
        </nav>
      </header>

      <section id="about" className="about-card">
        <div className="selfie-wrap">
          <img src="/selfie.jpg" alt="Brandon selfie" className="selfie" />
        </div>
        <div>
          <h1>Hey, my name is Brandon.</h1>
          
          <p>
            I am a <span className="accent">Full Stack Developer</span> based in
            Tennessee, USA.
          </p>
          <p>Currently I build cloud-based applications for HighLevel agencies.</p>
          <p>I enjoy:</p>
          <ul>
            <li>Legos</li>
            <li>D&D</li>
            <li>Magic the Gathering</li>
            <li>Video Games</li>
            <li>Reading</li>
          </ul>
          

          <p className="meet">Let&apos;s get a virtual coffee:</p>
          <button
            type="button"
            className="pill scheduler-trigger"
            onClick={() => setIsSchedulerOpen(true)}
          >
            Schedule Appointment
          </button>

          <p className="links"> Links:</p>
          <div className="contact-actions">
            <a className="pill" href="mailto:bgvfossen@gmail.com">
              Email
            </a>
            <a
              className="pill"
              href="https://www.linkedin.com/in/brandon-vanfossen/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="pill"
              href="https://github.com/Chaoscarab"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="proficiencies-section">
        <h2>Technical Proficiencies</h2>
        <div className="skills-grid">
          {proficiencies.map((item) => (
            <div key={item.alt} className="skill-tile">
              <img src={item.src} alt={item.alt} />
              <span>{item.alt}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>My Personal Projects</h2>
        <div className="projects-scroll">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              {project.wordmark ? (
                <div className="project-image mimosa-wordmark" aria-label="Mimosa Messenger logo">
                  <span>Mimosa</span>
                  <img src={project.image} alt="Mimosa logo" className="mimosa-logo" />
                  <span>Messenger</span>
                </div>
              ) : (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {isSchedulerOpen ? (
        <div
          className="scheduler-modal-backdrop"
          onClick={() => setIsSchedulerOpen(false)}
          role="presentation"
        >
          <div
            className="scheduler-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="scheduler-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="scheduler-modal-header">
              <div className="scheduler-copy">
                <h2 id="scheduler-modal-title">Book a time on my Google Calendar</h2>
                <p>Pick an open slot and Google Calendar will handle the invite.</p>
              </div>
              <button
                type="button"
                className="scheduler-close"
                aria-label="Close appointment scheduler"
                onClick={() => setIsSchedulerOpen(false)}
              >
                Close
              </button>
            </div>
            <iframe
              className="scheduler-frame"
              src={appointmentSchedulerUrl}
              title="Google Calendar appointment scheduler"
              loading="lazy"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
