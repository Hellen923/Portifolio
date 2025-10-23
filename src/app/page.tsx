"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetSection = document.getElementById(targetId || '');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Form validation
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
          if ((input as HTMLInputElement).value.trim() === '') {
            input.classList.add('error');
            isValid = false;
          } else {
            input.classList.remove('error');
          }
        });

        if (!isValid) {
          e.preventDefault();
          alert('Please fill in all fields.');
        }
      });
    }

    // Remove error class on input
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
      });
    });
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">HELLEN <span>PORTFOLIO</span></a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="gradient-btn">Hire Me</a>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-layout">
          <div className="home-content">
            <h1>Hi, I'm <span>Hellen</span> 💫</h1>
            <h3>Web Developer | Creative Designer</h3>
            <p>I design and build responsive, modern websites with a focus on clean code and elegant user experiences.</p>
            <a href="./Hellen-CV.pdf" className="btn" download>Download CV</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
          <div className="home-img-card">
            <Image src="/images/profile.jpg" alt="Hellen" width={300} height={300} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p className="centered-text">
            Hello! I'm Hellen, a passionate web developer who loves turning ideas into beautiful <span className="br">websites</span>.<br />
            I enjoy creating clean layouts, smooth user experiences, and designs that feel welcoming.<br />
            I believe in working with care, improving every detail, and building things that truly work for people.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3><i className='bx bx-paint'></i> Web Design</h3>
            <p>I create glowing, modern designs that guide users with ease and make your brand stand out.</p>
          </div>
          <div className="service-card">
            <h3><i className='bx bx-code-alt'></i> Frontend Development</h3>
            <p>I write clean, responsive code using HTML, CSS, and JavaScript to bring your ideas to life.</p>
          </div>
          <div className="service-card">
            <h3><i className='bx bx-user-voice'></i> UI/UX Consulting</h3>
            <p>I help teams build interfaces that feel natural, intuitive, and emotionally connected to users.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Project Card */}
          <div className="project-card">
            <Image src="/images/project1.png" alt="Project 1" width={350} height={200} />
            <div className="project-info">
              <h3>My Awesome Project</h3>
              <p>I built this project using HTML, CSS, JavaScript, Node.js, and MongoDB. It's fully responsive and optimized for mobile.</p>
              <div className="tech-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/yourusername/project1" target="_blank">GitHub</a>
                <a href="https://project1-demo.netlify.app" target="_blank">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
        <a href="mailto:hellen@example.com" className="btn">Send me an email</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank"><i className="bx bxl-linkedin"></i></a>
          <a href="mailto:hellen@example.com"><i className="bx bx-envelope"></i></a>
        </div>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="copyright">
          © 2025 Hellen | All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
