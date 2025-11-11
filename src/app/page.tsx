"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        <a href="hellenkiwagama@gmail.com" className="gradient-btn">Hire Me</a>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-layout">
          <div className="home-content">
            <h1>Hi, I'm <span>Hellen</span> </h1>
            <h3>Web Developer | Creative Designer</h3>
            <p>I design and build responsive, modern websites with a focus on clean code and elegant user experiences.</p>
            <div className="button-group">
              <a href="https://eu.docworkspace.com/d/sICCoyv25Apiay8gG?sa=601.1037" className="btn" download>Download CV</a>
              <a href="0752536262" className="btn">Contact Me</a>
            </div>
          </div>
          <div className="home-img-card">
            <Image src="/images/profile.jpg" alt="Hellen" width={400} height={400} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p className="centered-text">
            Hello! I'm Hellen, a passionate Full Stack Developer dedicated to turning ideas into impactful digital experiences through code and creativity. I love building applications that are not only visually appealing but also scalable, efficient, and user-focused. With expertise in Python, modern frameworks, and UI/UX design, I take pride in writing clean, maintainable code that blends precision with innovation. I thrive on exploring new technologies, solving complex problems, and collaborating with others to bring projects to life. For me, every challenge is an opportunity to learn, grow, and create solutions that truly make a difference.
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
            <h3><i className='bx bx-user-voice'></i>Backend Development</h3>
            <p>I build robust server-side applications and APIs using Python, Django, and Node.js to ensure data security and performance.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <Image src="/images/project1.png" alt="Karibu Groceries Ltd" width={400} height={250} />
            <div className="project-info">
              <h3>Karibu Groceries Ltd</h3>
              <p>A modern e-commerce platform for grocery shopping with product catalog, cart functionality, and secure checkout process.</p>
              <div className="tech-tags">
                <span>Django</span>
                <span>Python</span>
                <span>SQL Database</span>
                <span>Bootstrap</span>

              </div>
              <div className="project-links">
                <a href="https://github.com/hellen923/karibu-groceries" target="_blank">GitHub</a>
                <a href="https://karibu-groceries.netlify.app" target="_blank">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <Image src="/images/project1.png" alt="Litnest App" width={400} height={250} />
            <div className="project-info">
              <h3>Litnest App</h3>
              <p>Litnest is a novel-reading platform providing a high-productivity, immersive experience. The backend, built with Python, handles API routing and content processing, ensuring fast and reliable access for users to read their favorite novels.</p>
              <div className="tech-tags">
                <span>Python</span>
                <span>Django</span>
                <span>CSS</span>
                <span>PWA</span>
                <span>Tailwind</span>
                <span>REST API</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hellen923/litnest-app" target="_blank">GitHub</a>
                <a href="https://litnest-app.netlify.app" target="_blank">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <Image src="/images/project1.png" alt="Blog Platform" width={400} height={250} />
            <div className="project-info">
              <h3>Blog Platform</h3>
              <p>A content management system with user authentication, allowing writers to create and manage blog posts.</p>
              <div className="tech-tags">
                <span>Next.js</span>
                <span>Prisma</span>
                <span>PostgreSQL</span>
                <span>NextAuth.js</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/hellen923/blog-platform" target="_blank">GitHub</a>
                <a href="https://blog-platform-demo.netlify.app" target="_blank">Live Demo</a>
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