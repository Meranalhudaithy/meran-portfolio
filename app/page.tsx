import { AsciiLogo } from "@/components/AsciiLogo";
import { CommandConsole } from "@/components/CommandConsole";
import { ProgressBar } from "@/components/ProgressBar";
import { SectionHeading } from "@/components/SectionHeading";
import { TerminalFrame } from "@/components/TerminalFrame";
import {
  certificates,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/portfolio";

const navItems = [
  ["ABOUT", "about"],
  ["EXPERIENCE", "experience"],
  ["PROJECTS", "projects"],
  ["SKILLS", "skills"],
  ["EDUCATION", "education"],
  ["CONTACT", "contact"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        SKIP TO MAIN CONTENT
      </a>

      <div className="crt-overlay" aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="brand" aria-label="Go to home section">
            <span className="brand-prompt">~/</span>MERAN
          </a>
          <nav aria-label="Primary navigation">
            <ul>
              {navItems.map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`}>[{label}]</a>
                </li>
              ))}
              <li>
                <a href="/Meran-Alhudaithy-Resume.pdf" download>
                  [RESUME↓]
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="site-shell">
        <section id="home" className="hero-section">
          <div className="boot-sequence" aria-label="System boot sequence">
            <p>[OK] INITIALIZING PORTFOLIO KERNEL...</p>
            <p>[OK] LOADING AI_MODULES...</p>
            <p>[OK] MOUNTING PROJECT_ARCHIVE...</p>
            <p>[OK] USER PROFILE AUTHENTICATED.</p>
          </div>

          <div className="hero-grid">
            <div className="hero-primary">
              <AsciiLogo />
              <p className="eyebrow">&gt; USER_ID: MERAN_ALHUDAITHY</p>
              <h1 className="typing-title">
                {profile.role}
                <span aria-hidden="true">_</span>
              </h1>
              <p className="hero-summary">{profile.summary}</p>
              <div className="hero-actions">
                <a
                  href="#projects"
                  className="terminal-button terminal-button-solid"
                >
                  [ EXECUTE: VIEW_PROJECTS ]
                </a>
                <a href={`mailto:${profile.email}`} className="terminal-button">
                  [ SEND_MESSAGE ]
                </a>
              </div>
            </div>

            <TerminalFrame
              title="SYSTEM_INFO"
              status="ONLINE"
              className="system-panel"
            >
              <dl className="system-list">
                <div>
                  <dt>HOSTNAME</dt>
                  <dd>MERAN-PORTFOLIO</dd>
                </div>
                <div>
                  <dt>ROLE</dt>
                  <dd>AI_ENGINEER</dd>
                </div>
                <div>
                  <dt>LOCATION</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>LANGUAGES</dt>
                  <dd>AR / EN / FR-BEGINNER</dd>
                </div>
                <div>
                  <dt>FOCUS</dt>
                  <dd>AI · CV · DATA · LLM/RAG</dd>
                </div>
                <div>
                  <dt>STATUS</dt>
                  <dd className="status-online">{profile.availability}</dd>
                </div>
              </dl>
              <div className="system-meter" aria-hidden="true">
                SYSTEM READINESS [██████████] 100%
              </div>
            </TerminalFrame>
          </div>

          <TerminalFrame title="INTERACTIVE_SHELL" status="READY">
            <CommandConsole />
          </TerminalFrame>
        </section>

        <section id="about" className="content-section">
          <SectionHeading
            command="cat /profile/about.txt"
            title="ABOUT_PROCESS"
            description="A practical builder working across artificial intelligence, data, and product engineering."
          />
          <div className="two-column-grid">
            <TerminalFrame title="PROFILE_OUTPUT" status="READ">
              <div className="prose-output">
                <p>
                  <span className="line-number">01</span> I am a Computer
                  Information Systems student with a strong focus on artificial
                  intelligence and data science.
                </p>
                <p>
                  <span className="line-number">02</span> I build systems that
                  move from experimentation to usable products: using Data Science,
                  computer vision workflows, AI-assisted platforms, mobile
                  applications, and full-stack web experiences.
                </p>
                <p>
                  <span className="line-number">03</span> My work includes
                  satellite imagery analysis, human pose estimation, LLM/RAG
                  systems, GPS spoofing detection, and student-focused mobile
                  products.
                </p>
                <p>
                  <span className="line-number">04</span> I value clear problem
                  framing, measurable outcomes, collaborative development, and
                  technology that solves real needs.
                </p>
              </div>
            </TerminalFrame>

            <TerminalFrame title="RUNTIME_STATS" status="SYNCED">
              <div className="stats-grid">
                <div>
                  <strong>05</strong>
                  <span>PROJECTS_LOADED</span>
                </div>
                <div>
                  <strong>04</strong>
                  <span>MONTHS_KACST</span>
                </div>
                <div>
                  <strong>200</strong>
                  <span>TUWAIQ_HOURS</span>
                </div>
                <div>
                  <strong>150+</strong>
                  <span>VOLUNTEER_HOURS</span>
                </div>
              </div>
            </TerminalFrame>
          </div>
        </section>

        <section id="experience" className="content-section">
          <SectionHeading
            command="sudo systemctl status experience.service"
            title="EXPERIENCE_LOG"
            description="Applied AI experience in a research and satellite-imagery environment."
          />
          {experience.map((item) => (
            <TerminalFrame
              key={item.organization}
              title={`${item.organization}_SESSION`}
              status="COMPLETE"
            >
              <div className="experience-header">
                <div>
                  <p className="amber-text">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p>{item.organization}</p>
                </div>
                <span className="process-id">PID: AI-042</span>
              </div>
              <p className="experience-description">{item.description}</p>
              <ul className="terminal-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </TerminalFrame>
          ))}
        </section>

        <section id="projects" className="content-section">
          <SectionHeading
            command="ls -la /projects --sort=impact"
            title="PROJECT_ARCHIVE"
            description="Selected systems spanning AI platforms, computer vision, satellite analysis, detection, and mobile applications."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className={`project-card ${index < 3 ? "project-card-featured" : ""}`}
              >
                <div className="project-titlebar">
                  <span>/{project.slug}</span>
                  <span>[{project.status}]</span>
                </div>
                <div className="project-body">
                  <p className="project-index">
                    PROJECT_{String(index + 1).padStart(2, "0")}
                  </p>
                  <h3>{project.title}</h3>
                  {project.subtitle ? (
                    <p className="project-subtitle" dir="auto">
                      {project.subtitle}
                    </p>
                  ) : null}
                  <p className="project-description">{project.description}</p>
                  <div className="project-separator" aria-hidden="true">
                    ----------------------------------------
                  </div>
                  <ul className="terminal-list compact-list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="stack-list" aria-label="Technologies used">
                    {project.stack.map((technology) => (
                      <span key={technology}>[{technology}]</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <SectionHeading
            command="./skills.sh --diagnostic"
            title="CAPABILITY_MATRIX"
            description="Capability signals are grouped by working domain rather than arbitrary percentage claims."
          />
          <TerminalFrame title="DIAGNOSTIC_OUTPUT" status="PASS">
            <div className="skills-layout">
              {skillGroups.map((group) => (
                <div className="skill-block" key={group.label}>
                  <ProgressBar label={group.label} value={group.level} />
                  <p>{group.skills.join("  //  ")}</p>
                </div>
              ))}
            </div>
          </TerminalFrame>
        </section>

        <section id="education" className="content-section">
          <SectionHeading
            command="cat /etc/education && cat /etc/certificates"
            title="TRAINING_RECORDS"
            description="Formal education, intensive technical training, and selected certifications."
          />
          <div className="two-column-grid education-grid">
            <TerminalFrame title="EDUCATION.DB" status="VERIFIED">
              <div className="record-list">
                {education.map((item) => (
                  <article key={item.qualification} className="record-item">
                    <p className="amber-text">{item.period}</p>
                    <h3>{item.qualification}</h3>
                    <p className="record-issuer">{item.institution}</p>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </TerminalFrame>

            <TerminalFrame
              id="certificates"
              title="CERTIFICATES.DB"
              status="VERIFIED"
            >
              <div className="record-list">
                {certificates.map((item) => (
                  <article key={item.title} className="record-item">
                    <p className="amber-text">{item.year}</p>
                    <h3>{item.title}</h3>
                    <p className="record-issuer">{item.issuer}</p>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </TerminalFrame>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <SectionHeading
            command="ssh visitor@meran --connect"
            title="ESTABLISH_CONNECTION"
            description="Open to opportunities involving AI engineering, data science, computer vision, NLP, and intelligent software products."
          />
          <TerminalFrame title="CONTACT_PROTOCOL" status="LISTENING">
            <div className="contact-grid">
              <div>
                <p className="contact-prompt">
                  &gt; READY TO BUILD SOMETHING MEANINGFUL?
                </p>
                <h3>SEND A SIGNAL.</h3>
                <p>
                  The fastest route is email, but you can also view my GitHub
                  projects and connect with me on LinkedIn.{" "}
                </p>
              </div>
              <div className="contact-actions">
                <a
                  className="terminal-button terminal-button-solid"
                  href={`mailto:${profile.email}`}
                >
                  [ EMAIL: {profile.email} ]
                </a>
                <a
                  className="terminal-button"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  [ GITHUB ]
                </a>
                <a
                  className="terminal-button"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  [ LINKEDIN ]
                </a>
                <a
                  className="terminal-button"
                  href="/Meran-Alhudaithy-Resume.pdf"
                  download
                >
                  [ DOWNLOAD_RESUME.PDF ]
                </a>{" "}
              </div>
            </div>
          </TerminalFrame>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-inner">
          <p>MERAN_OS v1.0.0 // ALL SYSTEMS OPERATIONAL</p>
          <p>
            © 2026 MERAN ALHUDAITHY
            <span className="blink-cursor" aria-hidden="true">
              _
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
