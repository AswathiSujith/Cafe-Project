
import { Link } from "react-router-dom";

import Image1 from "./assets/Lotuscafe.jpg";
import Image2 from "./assets/coffee2.jpg";
import Image3 from "./assets/Sandwitch.jpg";
import Image4 from "./assets/Coffebean.jpg";
import Image5 from "./assets/Milk.jpg";
import Image7 from "./assets/clubsandwitch.jpg" 
import Image8 from "./assets/bread.jpg"


import "./Home.css"

function Home() {
  return (
    <div className="cafe-home">

      {/* NAVIGATION */}
      <nav className="home-nav">
        <Link to="/" className="home-logo">
           Lotus <span>Cafe</span>
        </Link>

        <div className="home-nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="home-hero">
        <div className="home-hero-content">
          <span className="home-eyebrow">
            WELCOME TO LOTUS CAFE
          </span>

          <h1>
            Your daily dose
            <br />
            of <span>happiness.</span>
          </h1>

          <p>
            Fresh coffee, delicious food, and beautiful
            moments. Discover your little corner of comfort.
          </p>

          <div className="home-hero-buttons">
            <Link to="/Menu" className="home-primary-button">
              Explore Our Menu ↗
            </Link>

            <Link to="/About" className="home-secondary-button">
              Our Story
            </Link>
          </div>
        </div>

        <div className="home-hero-image">
          <img src={Image1} alt="Lotus Cafe interior" />
        </div>
      </header>

      {/* FEATURES */}
      <section className="home-features">
        <div>
          <span>☕</span>
          <h3>Fresh Coffee</h3>
          <p>Rich aroma in every cup.</p>
        </div>

        <div>
          <span>♡</span>
          <h3>Made with Love</h3>
          <p>Every little detail matters.</p>
        </div>

        <div>
          <span>✿</span>
          <h3>Cozy Moments</h3>
          <p>A welcoming place to relax.</p>
        </div>
      </section>

      {/* SPECIALS */}
      <section className="home-specials">
        <div className="home-section-heading">
          <span className="home-eyebrow">A TASTE OF LOTUS</span>
          <h2>The Cafe <span>Specials</span></h2>
          <p>
            Discover the flavours and little details
            that make every visit special.
          </p>
        </div>

        <div className="home-specials-grid">
          <article className="home-special-card">
            <img src={Image2} alt="Freshly brewed coffee" />
            <h3>Freshly Brewed Coffee</h3>
            <p>Beautifully prepared, one cup at a time.</p>
          </article>

          <article className="home-special-card">
            <img src={Image3} alt="Avocado egg toast sandwich" />
            <h3>Delicious Bites</h3>
            <p>A delightful bite for every craving.</p>
          </article>

          <article className="home-special-card">
            <img src={Image8} alt="Cookie & Croissant" />
            <h3>Comfort Foods</h3>
            <p>Direct From The Oven </p>
          </article>
        </div>

        <Link to="/Menu" className="home-primary-button">
          Discover More ↗
        </Link>
      </section>

      {/* CLOSING BANNER */}
      <section className="home-closing">
        <span>YOUR LITTLE CORNER OF HAPPINESS</span>

        <h2>
          Come for the coffee.
          <br />
          <em>Stay for the moments.</em>
        </h2>

        <Link to="/Contact" className="home-primary-button">
          Visit Lotus Cafe ↗
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <Link to="/" className="home-footer-logo">
           Lotus Cafe
        </Link>

        <p>A little warmth in every cup.</p>

       

        <div className="home-footer-bottom">
          © {new Date().getFullYear()} Lotus Cafe. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;