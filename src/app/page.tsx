"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState('');
  const fullText = "Building clean, scalable web applications";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Navbar scroll effect
    const navbar = document.querySelector('header');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        const target = document.querySelector(href || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
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
   
    // Image tilt effect
    const profileImg = document.querySelector('.profile-image') as HTMLElement | null;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = profileImg?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      if (profileImg) {
        profileImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      }
    };
    const handleMouseLeave = () => {
      if (profileImg) {
        profileImg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      }
    };
    
    if (profileImg) {
      profileImg.addEventListener('mousemove', handleMouseMove);
      profileImg.addEventListener('mouseleave', handleMouseLeave);
    }
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (profileImg) {
        profileImg.removeEventListener('mousemove', handleMouseMove);
        profileImg.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">MY <span>PORTFOLIO</span></a>
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
            <h1>Hi, I'm <span>Hellen</span></h1>
            <h3 className="typing-text">
              {text}<span className="typing-cursor">|</span>
            </h3>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>Available for hire</span>
            </div>
            <div className="button-group">
              <a href="./Hellen-CV.pdf" className="btn" download>View CV</a>
              <a href="#contact" className="btn">Contact Me</a>
            </div>
          </div>
          <div className="home-img-card">
            <Image src="/images/profile.jpg" alt="Hellen" width={400} height={400} className="profile-image" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">~/about-me</span>
            </div>
            <div className="terminal-body">
              <p><span className="terminal-prompt">&gt;</span> Hello! I'm Hellen, a passionate <span className="highlight">web developer</span></p>
              <p><span className="terminal-prompt">&gt;</span> I love turning ideas into beautiful <span className="highlight">websites</span></p>
              <p><span className="terminal-prompt">&gt;</span> I enjoy creating clean layouts and smooth <span className="highlight">user experiences</span></p>
              <p><span className="terminal-prompt">&gt;</span> Currently working with: <span className="tech-highlight">React, Next.js, TypeScript</span></p>
              <p><span className="terminal-blink">_</span></p>
            </div>
          </div>
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
          {/* Swan Air - First Project */}
          <div className="project-card">
            <div className="project-image-container">
              <Image src="/images/Swanair.png" alt="Swan Air" width={400} height={250} />
              <div className="project-overlay">
                <span className="project-code">{"{ 01 }"}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Swan Air</h3>
              <p>A flight booking and management platform for domestic and international travel reservations.</p>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Nest.js</span>
                <span>Postgress</span>
                <span>TypeScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hellen923/swan-air" target="_blank"><i className='bx bxl-github'></i> Code</a>
                <a href="https://swan-air.netlify.app" target="_blank"><i className='bx bx-external'></i> Demo</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image-container">
              <Image src="/images/Litnest.png" alt="Litnest App" width={400} height={250} />
              <div className="project-overlay">
                <span className="project-code">{"{ 02 }"}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Litnest App</h3>
              <p>A productivity application for managing tasks, projects, and team collaboration with real-time updates.</p>
              <div className="tech-tags">
                <span>Python</span>
                <span>Django</span>
                <span>SQLite</span>
                <span>REST API</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hellen923/litnest-app" target="_blank"><i className='bx bxl-github'></i> Code</a>
                <a href="https://litnest-app.netlify.app" target="_blank"><i className='bx bx-external'></i> Demo</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image-container">
              <Image src="/images/Linest.png" alt="Polling Platform" width={400} height={250} />
              <div className="project-overlay">
                <span className="project-code">{"{ 03 }"}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Polling Platform</h3>
              <p>A platform for creating and managing polls with real-time results and user engagement features.</p>
              <div className="tech-tags">
                <span>Next.js</span>
                <span>Prisma</span>
                <span>PostgreSQL</span>
                <span>NextAuth.js</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hellen923/blog-platform" target="_blank"><i className='bx bxl-github'></i> Code</a>
                <a href="https://blog-platform-demo.netlify.app" target="_blank"><i className='bx bx-external'></i> Demo</a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-image-container">
              <Image src="/images/project.png" alt="Karibu Groceries Ltd" width={400} height={250} />
              <div className="project-overlay">
                <span className="project-code">{"{ 04 }"}</span>
              </div>
            </div>
            <div className="project-info">
              <h3>Karibu Groceries Ltd</h3>
              <p>A modern e-commerce platform for grocery shopping with product catalog, cart functionality, and secure checkout process.</p>
              <div className="tech-tags">
                <span>Python</span>
                <span>Django</span>
                <span>SQLite</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hellen923/karibu-groceries" target="_blank"><i className='bx bxl-github'></i> Code</a>
                <a href="https://karibu-groceries.netlify.app" target="_blank"><i className='bx bx-external'></i> Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <form action="https://formspree.io/f/your-form-id" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder="Your Message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
          
          <div className="contact-info">
            <div className="contact-methods">
              <div className="contact-method">
                <i className='bx bx-envelope'></i>
                <span>hellenkiwagama@gmail.com</span>
              </div>
              <div className="contact-method">
                <i className='bx bxl-github'></i>
                <span>github.com/hellen923</span>
              </div>
              <div className="contact-method">
                <i className='bx bxl-linkedin'></i>
                <span>linkedin.com/in/hellen-kiwagama</span>
              </div>
            </div>
            <a href="mailto:hellenkiwagama@gmail.com" className="btn" style={{marginTop: '1rem'}}>
              Send Direct Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://github.com/hellen923" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/hellen-kiwagama-4631b3356/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:hellenkiwagama@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
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
