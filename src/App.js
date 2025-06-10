// App.js
import { Sun, Moon, Linkedin, Github, ChevronDown, ChevronUp } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import avatar from "./avatar.png";
import { FaPython, FaJava, FaJsSquare, FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiSpringboot, SiGooglecloud, SiKubernetes, SiMysql, SiOracle, SiPytorch, SiTensorflow, SiScikitlearn, SiCplusplus, SiPhp } from "react-icons/si";
import "./App.css";

export default function Portfolio() {
  const formRef = useRef();
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [expanded, setExpanded] = useState({});

  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm("service_9y2osiy", "template_nwdpwk5", formRef.current, "AjQgtfBwJCkRsjpfd")
    .then(
      () => alert("Message sent successfully!"),
      () => alert("Failed to send message, please try again.")
    );
};


  return (
    <main className="main">
      <div className="top-bar">
        <a href="mailto:nazninns58@gmail.com" style={{ fontWeight: 500 }}>
          nazninns58@gmail.com
        </a>

        <div className="top-actions">
          <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
            {isDark ? <Sun /> : <Moon />}
          </button>

          <div className="tab-row">
            <button className={activeSection === "skills" ? "tab active" : "tab"} onClick={() => setActiveSection(activeSection === "skills" ? null : "skills")}>Skills</button>
            <button className={activeSection === "experience" ? "tab active" : "tab"} onClick={() => setActiveSection(activeSection === "experience" ? null : "experience")}>Experience</button>
            <button className={activeSection === "resume" ? "tab active" : "tab"} onClick={() => setActiveSection(activeSection === "resume" ? null : "resume")}>Download Resume</button>
            <button className={activeSection === "contact" ? "tab active" : "tab"} onClick={() => setActiveSection(activeSection === "contact" ? null : "contact")}>Contact</button>
          </div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-left">
          <span style={{ backgroundColor: "#000", color: "#fff", padding: "0.25rem 0.5rem", borderRadius: "4px" }}>
            It’s me
          </span>
          <h1>Naznin Nahar</h1>
          <h2>Software Developer</h2>
          <p>
            I’m a cloud enthusiast and ML explorer who builds fast, scalable web applications.
            Let’s create something amazing together.
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/naznin-nahar-614653177/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="icon" />
            </a>
            <a href="https://github.com/NazninNaharSr" target="_blank" rel="noopener noreferrer">
              <Github className="icon" />
            </a>
            <a href="mailto:nazninns58@gmail.com" className="icon">
              ✉️
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={avatar} alt="Naznin Illustration" className="avatar-img" />
        </div>
      </div>

      {activeSection === "skills" && (
        <section className="section fade-in">
          <h2>Technical Skills</h2>
         <div className="skills-category">
            <h3>Languages</h3>
            <ul className="skills-grid">
              <li title="Python"><FaPython /></li>
              <li title="Java"><FaJava /></li>
              <li title="C++"><SiCplusplus /></li>
              <li title="C#">C#</li>
              <li title="JavaScript"><FaJsSquare /></li>
              <li title="PHP"><SiPhp /></li>
            </ul>

            <h3>Frameworks & Tools</h3>
            <ul className="skills-grid">
              <li title="React.js"><FaReact /></li>
              <li title="Node.js"><FaNodeJs /></li>
              <li title="Spring Boot"><SiSpringboot /></li>
              <li title="Docker"><FaDocker /></li>
              <li title="Kubernetes"><SiKubernetes /></li>
              <li title="Google Cloud Platform"><SiGooglecloud /></li>
              <li title="GitHub Actions"><FaGithub /></li>
            </ul>

            <h3>Databases</h3>
            <ul className="skills-grid">
              <li title="MySQL"><SiMysql /></li>
              <li title="PostgreSQL"><SiPostgresql /></li>
              <li title="MongoDB"><SiMongodb /></li>
              <li title="Oracle"><SiOracle /></li>
            </ul>

            <h3>Machine Learning</h3>
            <ul className="skills-grid">
              <li title="TensorFlow"><SiTensorflow /></li>
              <li title="PyTorch"><SiPytorch /></li>
              <li title="Scikit-learn"><SiScikitlearn /></li>
            </ul>
          </div>
        </section>
      )}

      {activeSection === "experience" && (
        <section className="section fade-in">
          <h2>Experience (2 Years)</h2>

          {[{
            key: 'ms',
            company: 'MicroSense Technology',
            role: 'Software Engineer Intern (Generative AI)',
            location: 'Fremont, CA',
            dates: 'Sep 2024 – Dec 2024',
            bullets: [
              'Gesture Recognition System: Built real-time object and gesture recognition using 3D CNNs and LLMs, achieving 97% accuracy.',
              'Cloud Deployment: Deployed Flask REST API with Docker containers on GCP Compute Engine, optimizing latency by 21%.'
            ]
          }, {
            key: 'olivine',
            company: 'Olivine Limited',
            role: 'Software Developer Intern',
            location: 'Dhaka, Bangladesh',
            dates: 'Feb 2021 – Oct 2021',
            bullets: [
              'REST API Development: Developed secure APIs in Spring Boot for a national land record system serving 5,000+ users.',
              'Testing and Optimization: Implemented 90%+ test coverage using JUnit; optimized query performance, reducing response time by 62%.'
            ]
          }, {
            key: 'ninja',
            company: 'Code Ninjas',
            role: 'Lead Coding Instructor',
            location: 'Cupertino, CA',
            dates: 'Mar 2023 – Present',
            bullets: [
              'Curriculum Design: Led AI/ML bootcamps, guiding students through neural networks, ethics, and real-world projects.',
              'Game Dev Instruction: Taught JavaScript, Unity (C#), and Roblox development concepts to beginner-level coders.'
            ]
          }, {
            key: 'aiub',
            company: 'AIUB',
            role: 'Teaching Assistant – C# (OOP)',
            location: 'Dhaka, Bangladesh',
            dates: 'Feb 2021 – Apr 2021',
            bullets: [
              'Mentorship: Provided support to 50+ students, improving course grades by an average of 15%.'
            ]
          }].map((exp) => (
            <div key={exp.key} className="experience-entry">
              <div className="experience-header" onClick={() => toggleExpand(exp.key)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{exp.company}</strong><br />
                  <em>{exp.role}</em>
                </div>
                <div style={{ textAlign: 'right' }}>
                  {expanded[exp.key] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}<br />
                  <span>{exp.location}<br />{exp.dates}</span>
                </div>
              </div>
              {expanded[exp.key] && (
                <ul className="experience-details">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>🛠️ {b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {activeSection === "resume" && (
        <section className="section fade-in">
          <h2>Download My Resume</h2>
          <a href="https://drive.google.com/file/d/1oc9edouUIOxbjWB9_FYcUXQijK4j9qtt/view?usp=sharing" download className="download-btn">
            Download Resume (PDF)
          </a>
        </section>
      )}

      {activeSection === "contact" && (
    <section className="section fade-in">
    <h2>Contact Me</h2>

    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
      <input type="text" name="user_name" placeholder="Your Name" required className="input" />
      <input type="email" name="user_email" placeholder="Your Email" required className="input" />
      <textarea name="message" placeholder="Your Message" rows="4" required className="textarea" />
      <button type="submit" className="lets-talk">Send Message</button>
    </form>
  </section>
)}

    </main>
  );
}
