import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Download, Github, Linkedin, Mail, Menu, X, ExternalLink,
  Cloud, Container, Boxes, Server, Code2, Terminal, GitBranch, Settings,
  GraduationCap, BriefcaseBusiness, MapPin, Send, Sun, Moon
} from "lucide-react";
import "./styles.css";

const GITHUB_URL = "https://github.com/dinesh-gurjar94";
const LINKEDIN_URL = "https://www.linkedin.com/";
const EMAIL = "your-email@example.com";

const skills = [
  ["AWS", Cloud], ["Docker", Container], ["Kubernetes", Boxes], ["Terraform", Settings],
  ["Linux", Terminal], ["Jenkins", GitBranch], ["Ansible", Settings], ["Git", Code2],
  ["GitHub", Github], ["Nginx", Server]
];

const projects = [
  {
    title: "Aarya Agarbatti Website",
    type: "Full-stack E-commerce",
    description: "E-commerce platform concept with product catalog, admin workflow, Razorpay-ready payments, WhatsApp integration and Docker/AWS deployment.",
    stack: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    className: "project-aarya",
    live: "#",
    github: GITHUB_URL
  },
  {
    title: "Royal BuildCon Website",
    type: "Business Website",
    description: "Modern construction-business website with responsive UI, contact workflow and an AWS/Nginx deployment approach.",
    stack: ["React", "Docker", "AWS", "Nginx"],
    className: "project-royal",
    live: "#",
    github: GITHUB_URL
  },
  {
    title: "Cloud DevOps Portfolio",
    type: "Personal Portfolio",
    description: "This portfolio itself: component-based React UI, Dockerized production build, Nginx reverse serving and AWS EC2 deployment.",
    stack: ["React", "Vite", "Docker", "AWS"],
    className: "project-portfolio",
    live: "#",
    github: GITHUB_URL
  }
];

function App() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className={dark ? "app dark" : "app light"}>
      <header className="nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => go("home")}>
            DINESH <span>GURJAR</span>
          </button>
          <nav className={open ? "nav-links open" : "nav-links"}>
            {["about","skills","projects","experience","education","contact"].map(item => (
              <button key={item} onClick={() => go(item)}>{item[0].toUpperCase()+item.slice(1)}</button>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <a className="resume-btn" href="/resume.pdf" download><Download size={16}/> Resume</a>
            <button className="mobile-btn" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X/> : <Menu/>}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid"/>
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><i/> MCA Student | Cloud & DevOps Engineer</div>
              <h1>Hi, I’m<br/><span>Dinesh Gurjar</span></h1>
              <h2>Building <b>•</b> Automating <b>•</b> Deploying <b>•</b> Learning</h2>
              <p>Passionate about Cloud, DevOps and building real-world solutions. I enjoy automating, deploying and learning technologies that solve practical problems.</p>
              <div className="hero-buttons">
                <button className="primary" onClick={() => go("projects")}>View My Projects <ArrowRight size={18}/></button>
                <a className="secondary" href="/resume.pdf" download><Download size={18}/> Download Resume</a>
              </div>
              <div className="socials">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github/></a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin/></a>
                <a href={`mailto:${EMAIL}`}><Mail/></a>
              </div>
            </div>
            <CloudArchitecture/>
          </div>
        </section>

        <section className="stats container">
          <Stat icon={<BriefcaseBusiness/>} number="6+" label="Months Internship"/>
          <Stat icon={<Boxes/>} number="5+" label="Projects Completed"/>
          <Stat icon={<Settings/>} number="10+" label="Technologies"/>
          <Stat icon={<Cloud/>} number="100%" label="Learning & Growing"/>
        </section>

        <section id="about" className="section container two-col">
          <div>
            <SectionLabel text="ABOUT ME"/>
            <h2 className="section-title">Building for a Better Tomorrow</h2>
            <p className="body-copy">I am Dinesh Gurjar, currently pursuing MCA at Savitribai Phule University. I completed my BCA from Sangamner College and am focused on Cloud Computing, DevOps and AWS.</p>
            <p className="body-copy">I completed a 6-month internship at D Tech Point, where I worked around Linux, AWS, Docker and deployment tasks. My goal is to grow into a Cloud/DevOps Engineer and build scalable cloud solutions.</p>
            <button className="text-btn" onClick={() => go("experience")}>See my journey <ArrowRight size={17}/></button>
          </div>
          <div id="skills">
            <SectionLabel text="MY SKILLS"/>
            <h2 className="section-title">Technologies I Work With</h2>
            <div className="skills-grid">
              {skills.map(([name, Icon]) => <div className="skill" key={name}><Icon/><span>{name}</span></div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionLabel text="FEATURED PROJECTS"/>
          <div className="section-head"><h2 className="section-title">My Featured Projects</h2><span className="view-all">View All Projects <ArrowRight size={16}/></span></div>
          <div className="projects-grid">
            {projects.map(p => <ProjectCard key={p.title} {...p}/>)}
          </div>
        </section>

        <section className="section container three-col">
          <div id="experience" className="panel">
            <SectionLabel text="EXPERIENCE"/>
            <div className="timeline-item">
              <div className="round-icon"><BriefcaseBusiness/></div>
              <div><h3>Internship — D Tech Point</h3><p className="muted">Cloud & DevOps Intern</p><ul><li>AWS, Linux, Docker and deployment tasks</li><li>CI/CD pipeline exposure</li><li>Hands-on real-world project experience</li></ul></div>
              <span className="duration">6 Months</span>
            </div>
          </div>

          <div id="education" className="panel">
            <SectionLabel text="EDUCATION"/>
            <div className="edu-item"><div className="round-icon"><GraduationCap/></div><div><h3>MCA (Pursuing)</h3><p> Savitribai Phule University</p><span>2026 – 2028</span></div></div>
            <div className="edu-item"><div className="round-icon"><GraduationCap/></div><div><h3>BCA</h3><p>Sangamner College</p><span>2023 – 2026 | CGPA: 7.81</span></div></div>
          </div>

          <div id="contact" className="panel contact-panel">
            <SectionLabel text="CONTACT"/>
            <h2 className="contact-title">Get In Touch</h2>
            <p className="body-copy">Open to internships, entry-level Cloud/DevOps opportunities, collaborations and interesting projects.</p>
            <a href={`mailto:${EMAIL}`} className="contact-row"><Mail/> {EMAIL}</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="contact-row"><Linkedin/> LinkedIn</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="contact-row"><Github/> GitHub</a>
            <span className="contact-row"><MapPin/> Maharashtra, India</span>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container"><span>© {new Date().getFullYear()} Dinesh Gurjar</span><span>Cloud • DevOps • AWS</span></div></footer>
    </div>
  );
}

function Stat({icon, number, label}) {
  return <div className="stat"><span className="stat-icon">{icon}</span><div><strong>{number}</strong><small>{label}</small></div></div>
}
function SectionLabel({text}) { return <div className="section-label"><span/> {text}</div> }

function CloudArchitecture() {
  return <div className="architecture">
    <div className="cloud-orb"><Cloud size={36}/><strong>AWS</strong></div>
    <ArchNode icon={<Server/>} text="EC2" pos="n1"/>
    <ArchNode icon={<Boxes/>} text="S3" pos="n2"/>
    <ArchNode icon={<Container/>} text="Docker" pos="n3"/>
    <ArchNode icon={<Boxes/>} text="Kubernetes" pos="n4"/>
    <ArchNode icon={<Settings/>} text="Terraform" pos="n5"/>
    <ArchNode icon={<GitBranch/>} text="Jenkins" pos="n6"/>
    <ArchNode icon={<Terminal/>} text="Linux" pos="n7"/>
    <div className="arch-line l1"/><div className="arch-line l2"/><div className="arch-line l3"/><div className="arch-line l4"/>
    <div className="arch-caption">Cloud<br/>DevOps<br/>Automation</div>
  </div>
}
function ArchNode({icon,text,pos}) { return <div className={`arch-node ${pos}`}>{icon}<span>{text}</span></div> }

function ProjectCard({title,type,description,stack,className,live,github}) {
  return <article className="project-card">
    <div className={`project-image ${className}`}>
      <img src={`/project-images/${className.replace("project-", "")}.svg`} alt={`${title} project preview`} />
    </div>
    <div className="project-info"><span className="project-type">{type}</span><h3>{title}</h3><p>{description}</p><div className="tags">{stack.map(s=><span key={s}>{s}</span>)}</div><div className="project-links"><a href={live}>Live Demo <ExternalLink size={15}/></a><a href={github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a></div></div>
  </article>
}

createRoot(document.getElementById("root")).render(<App/>);