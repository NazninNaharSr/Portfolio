// App.js
import { Sun, Moon, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import avatar from "./avatar.png";
import "./App.css";

export default function Portfolio() {
  const formRef = useRef();
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <main className="main">
      <div className="top-bar">
        <a href="mailto:nazninns58@gmail.com" style={{ fontWeight: 500 }}>
          nazninns58@gmail.com
        </a>

        <div className="right-tabs">
          <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
            {isDark ? <Sun /> : <Moon />}
          </button>

          <div className="tab-nav">
            <button className={activeSection === "skills" ? "tab active" : "tab"} onClick={() => setActiveSection(activeSection === "skills" ? null : "skills")}>Skills</button>
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
          <ul>
            <li><strong>Languages:</strong> Python, Java, Go, C++, C#, JavaScript, PHP</li>
            <li><strong>Frameworks & Tools:</strong> React.js, Node.js, Flask, Spring Boot, .NET Core</li>
            <li><strong>Cloud & DevOps:</strong> Docker, Kubernetes, GCP, GitHub Actions</li>
            <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Oracle</li>
            <li><strong>Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy</li>
          </ul>
        </section>
      )}
    </main>
  );
}
