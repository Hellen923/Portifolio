"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer dedicated to turning ideas into impactful digital experiences through code and creativity.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    
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
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="mailto:hellenkiwagama@gmail.com" className="gradient-btn">Hire Me</a>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-layout">
          <div className="home-content">
            <h1>Hi, I'm <span>Hellen</span></h1>
            <h3 className="typing-text">
              {text}<span className="typing-cursor">|</span>
            </h3>
            
            <div className="button-group">
              <a href="https://docs.google.com/document/d/1P4J37ybAZxvUyuv95fZ0tVnOztIIf_9eKtP_uXW2kBE/edit?tab=t.0" className="btn" target="_blank">View CV</a>
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
        <h2>About Me</h2>
        <div className="about-layout">
          <div className="about-text">
            <p>
              Hello! I'm Hellen, a passionate Full Stack Developer dedicated to turning ideas into impactful digital experiences through code and creativity. I love building applications that are not only visually appealing but also scalable, efficient, and user-focused.
            </p>
            <p>
              With expertise in Python, modern frameworks, and UI/UX design, I take pride in writing clean, maintainable code that blends precision with innovation. I thrive on exploring new technologies, solving complex problems, and collaborating with others to bring projects to life. For me, every challenge is an opportunity to learn, grow, and create solutions that truly make a difference.
            </p>
          </div>
          <div className="about-card">
            <h4>What I Do</h4>
            <ul className="focus-list">
              <li><i className='bx bx-code-alt'></i> Full-Stack Development</li>
              <li><i className='bx bx-mobile-alt'></i> Mobile App Development</li>
              <li><i className='bx bx-paint'></i> UI/UX Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section id="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-container">
          {/* Frontend Development */}
          <div className="skill-category">
            <h3><i className='bx bx-code-alt'></i> Frontend Development</h3>
            <div className="skill-tags">
              <span>JavaScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Vue.js</span>
              <span>TypeScript</span>
              <span>HTML5</span>
              <span>CSS3/SASS</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          {/* Backend Development */}
          <div className="skill-category">
            <h3><i className='bx bx-server'></i> Backend Development</h3>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Python</span>
              <span>REST APIs</span>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="skill-category">
            <h3><i className='bx bx-mobile-alt'></i> Mobile Development</h3>
            <div className="skill-tags">
              <span>React Native</span>
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category">
            <h3><i className='bx bx-data'></i> Databases</h3>
            <div className="skill-tags">
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
            </div>
          </div>

          {/* Design & UX */}
          <div className="skill-category">
            <h3><i className='bx bx-paint'></i> Design & UX</h3>
            <div className="skill-tags">
              <span>Figma</span>
              <span>Visily</span>
              <span>Wireframing</span>
              <span>Prototyping</span>
            </div>
          </div>

          {/* Tools & Others */}
          <div className="skill-category">
            <h3><i className='bx bx-wrench'></i> Tools & Others</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Postman</span>
            </div>
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
                <span>PostgreSQL</span>
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
              <p>Litnest is a novel-reading platform providing a high-productivity, immersive experience with Python/Django backend.</p>
              <div className="tech-tags">
                <span>Python</span>
                <span>Django</span>
                <span>SQLite</span>
                <span>REST API</span>
                <span>Tailwind</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Hellen923/litnest" target="_blank"><i className='bx bxl-github'></i> Code</a>
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
              <p>A modern e-commerce platform for grocery shopping with product catalog, cart functionality, and secure checkout.</p>
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
              <div className="contact-method">
                <i className='bx bx-phone'></i>
                <span>+256 752536262</span>
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
          <a href="tel:+256-752536262">
            <i className="bx bx-phone"></i>
          </a>
        </div>
        <ul>
          <li><a href="#skills">Skills</a></li>
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
