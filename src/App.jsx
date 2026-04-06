import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import Scene from "./Scene";
import { motion } from "framer-motion";

function Navigation() {
  const scroll = useScroll();

  const scrollTo = (pageIndex) => {
    const target = pageIndex / (scroll.pages - 1);
    scroll.el.scrollTo({
      top: target * (scroll.el.scrollHeight - scroll.el.clientHeight),
      behavior: "smooth",
    });
  };

  return (
    <nav className="static-nav">
      <button className="nav-btn" onClick={() => scrollTo(0)}>Home</button>
      <button className="nav-btn" onClick={() => scrollTo(1)}>About</button>
      <button className="nav-btn" onClick={() => scrollTo(2)}>Skills</button>
      <button className="nav-btn" onClick={() => scrollTo(3)}>Projects</button>
      <button className="nav-btn" onClick={() => scrollTo(4)}>Contact</button>
    </nav>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#fff" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ScrollControls pages={5} damping={0.1}>
          <Scene />

          <Scroll html style={{ width: "100%" }}>
            <Navigation />

            <section id="home">
              <div className="content">
                <h1 style={{ fontSize: "5.5rem", margin: 0, fontWeight: 900 }}>Paul</h1>
                <p style={{ letterSpacing: "4px", color: "#666" }}>Front End Developer</p>
              </div>
            </section>

            <section id="about">
              <div className="content">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  <img src="paul.jpg" alt="Paul" className="profile-img-centered" />
                  <h2>About Me</h2>
                  <div className="about-description">
                    <p>
                      I'm <strong>John Paul Wendam</strong>, a student in Western Institute of Technology 
                      and currently gaining experience for developing and enhancing my skills.
                    </p>
                    <p>
                      I enjoy bridging the gap between functional code and minimalist design, 
                      ensuring every project tells a story through smooth interaction.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            <section id="skills">
              <div className="content">
                <h2>Skill</h2>
                <div className="skills-container">
                  <div className="skill-category">
                    <h3>Development</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">PHP</span>
                      <span className="skill-tag">MySQL</span>
                      <span className="skill-tag">React.js</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">Html</span>
                      <span className="skill-tag">CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

<section id="projects">
  <div className="content">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Selected Works</h2>
      
      <div className="project-grid">

        <div className="project-card">
          <div className="project-image">
            <img src="JJR.png" alt="JJR Meditrack" />
          </div>
          <div className="project-info">
            <h3>UI Challenge 2</h3>
            <p>Inventory & Sales Management System built with PHP and MySQL.</p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="Komun.png " alt="Komun" />
          </div>
          <div className="project-info">
            <h3>Komun</h3>
            <p>Digital Barangay Records Solution for local governance.</p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="Awesome.png" alt="Awesome Todos" />
          </div>
          <div className="project-info">
            <h3>Awesome Todos</h3>
            <p>A full-stack MERN application with secure authentication.</p>

          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="product.png" alt="" />
          </div>
          <div className="project-info">
            <h3>Product</h3>
            <p>Advertisement</p>
          </div>
        </div>

      </div>
    </motion.div>
  </div>
</section>

            <section id="contact">
              <div className="content">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                  <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Get In Touch</h2>
                  <p style={{ color: "#666", marginBottom: "2rem" }}>
                    Have a project in mind? Drop a message below.
                  </p>
                  
                  <div className="contact-container">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Your Name" required />
                      <input type="email" placeholder="Your Email" required />
                      <textarea placeholder="Your Message or Comments" rows="4" required></textarea>
                      <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                    
                    <div className="social-links">
                      <a href="https://github.com/johnpaulwendam" target="_blank">GITHUB</a>
                      <a href="https://johnpaulbalquin52@gmail.com">EMAIL</a>
                      <a href="https://www.linkedin.com/in/john-paul-wendam-b727703b9/">LINKEDIN</a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}