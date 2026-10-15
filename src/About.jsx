import { Link } from "react-router-dom";

import Image6 from "./assets/C1.jpg";
import Image7 from "./assets/c2.jpg";
import Image8 from "./assets/c3.jpg";
import Image9 from "./assets/c5.jpg";
import Image10 from "./assets/Lotus.jpg";
import "./about.css";

function About() {
  return (
    <div className="about-page">

      {/* NAVIGATION */}
      <nav className="about-nav">
        <Link to="/" className="about-logo">
           Lotus <span>Cafe</span>
        </Link>

        <div className="about-nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">
            THE STORY OF LOTUS CAFE
          </span>

          <h1>
            More than coffee,
            <br />
            <span>it's a feeling.</span>
          </h1>

          <p>
            Welcome to Lotus Cafe, where every cup tells a
            story and every bite brings a smile.
          </p>
        </div>

        <div className="about-hero-image">
          <img src={Image6} alt="Lotus Cafe atmosphere" />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="about-story-image">
          <img src={Image7} alt="Inside Lotus Cafe" />
        </div>

        <div className="about-story-content">
          <span className="about-eyebrow">OUR STORY</span>

          <h2>
            A little taste
            <br />
            <span>of happiness.</span>
          </h2>

          <p>
            Our café was born from a simple love for coffee,
            delicious food, and the joy of bringing people
            together. Inspired by the cozy charm of cafés and
            the beauty of everyday moments, we created a
            welcoming space where everyone can relax, connect,
            and enjoy their favourite flavours.
          </p>

          <p>
            From freshly brewed coffee made with carefully
            selected beans to wholesome bites and delightful
            treats, every detail reflects our passion for
            quality and comfort.
          </p>

          <p>
            Our vision is to create more than just a café —
            a place where meaningful conversations, peaceful
            moments, and beautiful memories begin, one cup
            at a time.
          </p>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="about-philosophy">
        <div className="about-philosophy-content">
          <span className="about-eyebrow">WHAT WE BELIEVE</span>

          <h2>
            Good food.
            <br />
            <span>Great company.</span>
          </h2>

          <p>
            Our café is designed for coffee lovers, students,
            working professionals, friends, and families
            looking for a comfortable place to relax and
            connect.
          </p>

          <p>
            Whether you're studying, working, meeting friends,
            or enjoying a quiet moment alone, we want every
            visit to feel special.
          </p>
        </div>

        <div className="about-philosophy-image">
          <img src={Image8} alt="Coffee and cafe details" />
        </div>
      </section>
      
      {/* OUR STORY */}
      <section className="about-signaturedish">
        <div className="about-signaturedish-image">
          <img src={Image10} alt="Lotus Seed Noodle" />
        </div>

        <div className="about-story-content">
          <span className="about-eyebrow">OUR SIGNATURE DISH</span>

          <h2>
            The Lotus
            <br />
            <span>Seed Noodle</span>
          </h2>

          <p>
            Chewy, delicate noodles made with healthy lotus seeds,
            wok-tossed with fresh vegetables and a savory glaze. 
            Light, nutritious, and delicious. 
          </p>
          <p>
            A wholesome and comforting bowl featuring silky, delicate
            noodles infused with nutrient-rich lotus seed flour. 
            Tossed in a savory, aromatic broth with fresh stir-fried
             greens and yourchoice of protein. A perfect harmony of
              light, earthy flavor and pure
          </p>
         
            
          
        
        </div>
      </section>

      
      {/* GALLERY */}
      <section className="about-gallery">
        <div className="about-section-heading">
          <span className="about-eyebrow">LITTLE MOMENTS, BIG MEMORIES</span>
          <h2>Life at <span>Lotus Cafe</span></h2>
        </div>

        <div className="about-gallery-grid">
          <img src={Image6} alt="Lotus Cafe" />
          <img src={Image7} alt="Cafe atmosphere" />
          <img src={Image8} alt="Coffee at Lotus Cafe" />
          <img src={Image9} alt="Lotus Cafe experience" />
           <img src={Image10} alt="Lotus Cafe experience" />
          
          
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="about-closing">
        <h2>
          Every cup has a story.
          <br />
          <span>Come create yours.</span>
        </h2>

        <Link to="/Menu" className="about-button">
          Explore Our Menu ↗
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <Link to="/" className="about-footer-logo">
           Lotus Cafe
        </Link>

        <p>A little warmth in every cup.</p>

        
        <div className="about-footer-bottom">
          © {new Date().getFullYear()} Lotus Cafe. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default About;