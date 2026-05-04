import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="portfolio-nav">
        <div className="nav-brand">Brandon VanFossen</div>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="resume-frame-wrap">
        <iframe
          src="/resume.pdf#toolbar=1&navpanes=0&view=FitH"
          title="Brandon VanFossen Resume"
          className="resume-frame"
        >
          <p>
            Your browser cannot display embedded PDFs. You can still
            <a href="/resume.pdf" download>
              download the resume here
            </a>
            .
          </p>
        </iframe>
      </section>
    </main>
  );
}
