import { useState } from "react";
import './App.css';
import ImageProjects from './components/projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  // AOS ANIMATION
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,    
      });
    }, []);

    const [activeCategory, setActiveCategory] = useState("media");
    console.log(activeCategory);
    const mediaImages = [
      process.env.PUBLIC_URL + "/images/works/work1.jpg",
      process.env.PUBLIC_URL + "/images/works/work2.jpg",
      process.env.PUBLIC_URL + "/images/works/work3.jpg",
      process.env.PUBLIC_URL + "/images/works/work4.jpg",
      process.env.PUBLIC_URL + "/images/works/work5.jpg",
      process.env.PUBLIC_URL + "/images/works/work6.jpg",
      process.env.PUBLIC_URL + "/images/works/work7.jpg",
      process.env.PUBLIC_URL + "/images/works/work8.jpg",
      process.env.PUBLIC_URL + "/images/works/work9.jpg",
      process.env.PUBLIC_URL + "/images/works/work10.jpg",
      process.env.PUBLIC_URL + "/images/works/work11.jpg",
  ];

  const brandingImages = [
      process.env.PUBLIC_URL + "/images/works/work12.jpg",
      process.env.PUBLIC_URL + "/images/works/work13.jpg",
      process.env.PUBLIC_URL + "/images/works/work14.jpg",
      process.env.PUBLIC_URL + "/images/works/work15.jpg",
      process.env.PUBLIC_URL + "/images/works/work16.jpg",
  ];

  const printsImages = [
      process.env.PUBLIC_URL + "/images/works/work17.jpg",
      process.env.PUBLIC_URL + "/images/works/work18.jpg",
      process.env.PUBLIC_URL + "/images/works/work19.jpg",
  ];
  const renderImages = () => {
    if (activeCategory === "media") return mediaImages;
    if (activeCategory === "branding") return brandingImages;
    if (activeCategory === "prints") return printsImages;
  };

  return (
    <div>
      {/* SERVICES */}
    <div className="services" id="services">
        <a href="#project" className="service-item">social media</a>
        <a href="#project" className="service-item">Branding</a>
        <a href="#project" className="service-item">prints</a>
    </div>

      {/* HERO */}
      <section className="hero text-center" >
        <div className="container" data-aos="fade-up">
          <h5>hello, i'm </h5>
          <h1 className="fw-bold title">Maiar Elgizawy</h1>
          <p className="lead mt-3"><span className='btn-custom'>• Graphic Designer</span></p>
        </div>
      </section>
      

      {/* SKILLS */}
    <section className="skills" id="skills" data-aos="fade-up">
      <h2 className="skills-title">Skills</h2>
      <div className="icons">
          <div className="icon-item">
              <img src={process.env.PUBLIC_URL +  "/images/icons/PS-icon.png"} alt="PS icon" /><span>Adobe Photoshop</span>
          </div>
          <div className="icon-item">
              <img src={process.env.PUBLIC_URL +  "/images/icons/AI-icon.png"} alt="AI icon" /><span>Adobe Illustrator</span>
          </div>
          <div className="icon-item">
              <img src={process.env.PUBLIC_URL +  "/images/icons/ID-icon.png"} alt="ID icon" /><span>Adobe InDesign</span>
          </div>
      </div>
    </section>

      {/* PROJECTS */}
      <section className="projects-wrapper dark" id="project" data-aos="fade-up">

        <h2 className="projects-main-title">My Projects</h2>

        <div className="projects-filter">
          <button
            className={activeCategory === "media" ? "active-filter" : ""}
            onClick={() => setActiveCategory("media")}
          >
            Media
          </button>

          <button
            className={activeCategory === "branding" ? "active-filter" : ""}
            onClick={() => setActiveCategory("branding")}
          >
            Branding
          </button>

          <button
            className={activeCategory === "prints" ? "active-filter" : ""}
            onClick={() => setActiveCategory("prints")}
          >
            Prints
          </button>
        </div>

        <ImageProjects images={renderImages()} category={activeCategory}/>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2023 Maiar Elgizawy. All rights reserved.</p>
        <div className="social-links">
            <a href="https://wa.me/201212693128">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/maiar_elgizawy/">
                <i className="fa-brands fa-instagram"></i>
            </a>
        </div>
    </footer>

    </div>
  );
}

export default App;