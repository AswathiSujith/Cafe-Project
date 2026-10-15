import { Link } from "react-router-dom";
import "./contact.css";

function Contact() {
  return (
    <div className="lotus-contact-page">

      {/* NAVIGATION */}
      <nav className="contact-navbar">
        <Link to="/" className="contact-logo">
           Lotus <span>Cafe</span>
        </Link>

        <div className="contact-nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Contact" className="contact-nav-active">
            Contact
          </Link>
        </div>

        
      </nav>

      {/* HERO */}
      <header className="contact-hero">
        <span className="contact-eyebrow">
          ✦ &nbsp; WE WOULD LOVE TO HEAR FROM YOU
        </span>

        <h1>
          Let's have a
          <br />
          <span>coffee together.</span>
        </h1>

        <p>
          Have a question, want to visit us, or simply want
          to say hello? We'd love to hear from you.
        </p>

    

        <div className="contact-hero-decoration"></div>
      </header>

      {/* CONTACT DETAILS */}
      <section className="contact-details" id="contact-details">
        <div className="contact-section-heading">
          <span className="contact-eyebrow">HERE FOR YOU</span>

          <h2>
            Get in <span>Touch</span>
          </h2>

          <p>
            Whether it's a quick question or a friendly hello,
            our little café is always happy to connect.
          </p>
        </div>

        <div className="contact-card-grid">

          {/* PHONE */}
          <article className="contact-info-card">
            <div className="contact-icon">☎</div>

            <span className="contact-card-label">
              GIVE US A CALL
            </span>

            <h3>Phone</h3>

            <p>Have a question? We'd be happy to help.</p>

            <span className="contact-card-link">
              987******
            </span>
          </article>

          {/* EMAIL */}
          <article className="contact-info-card">
            <div className="contact-icon">✉</div>

            <span className="contact-card-label">
              DROP US A LINE
            </span>

            <h3>Email</h3>

            <p>Send us your questions or enquiries anytime.</p>

            <a
              href="mailto:lotuscafe@gmail.com"
              className="contact-card-link"
            >
              lotuscafe@gmail.com
            </a>
          </article>
          <section className="contact-feedback">
            <div className="contact-feedback-heading">
              <span className="contact-eyebrow">WE VALUE YOUR OPINION</span>
              
              <h2>Share Your Experience</h2>
              <p>We appreciate you taking the time to share your thoughts and help us grow.</p>
              </div>
              <form 
              className="feedback-form"
              onSubmit={(event) => {
               event.preventDefault() ;
               alert("THANKYOU FOR YOUR FEEDBACK");
               event.currentTarget.reset(); 
              }}>
               <div className="feedback-form-row">
                <div className="feedback-field">
                  <label htmlfor="feedback-name">Your Name</label>
                  <input type="text" id="feedback-name" name="name" placeholder="Enter your name" required />
                </div>
               </div>
                 
                <div className="feedback-field">
                  <label htmlfor="feedback-email">Email Address</label>
                  <input type="text" id="feedback-email" name="email" placeholder="johndoe@gmail.com" required />
                </div>
               
                 
                <div className="feedback-field">
                  <label htmlfor="feedback-rating">How was your experience?</label>
                  <select type="text" id="feedback-rating" name="rating" required  DefaultValue="">
                    <option value="disabled">Select your rating</option>
                     <option value="5">⭐⭐⭐⭐⭐-Excellent</option>
                      <option value="4">⭐⭐⭐⭐-Very good</option>
                       <option value="3">⭐⭐⭐-Good</option>
                        <option value="2">⭐⭐-Fair</option>
                         <option value="1">⭐-Needs improvement</option>
                  </select>
                </div>
                <div className="feedback-field">
                  <label htmlfor="feedback-message">Your Feedback</label>
                  <textarea id="feedback-message" name="message" rows="5" placeholder="Tell us what you liked or what we can improve" required />
                </div>
                <button type="submit" className="feedback-submit">Submit Feedback</button>
              
            </form>
          </section>

          {/* VISIT */}
          <article className="contact-info-card">
            <div className="contact-icon">⌖</div>

            <span className="contact-card-label">
              COME ON OVER
            </span>

            <h3>Visit Us</h3>

            <p>
              Stop by, relax, and enjoy your favourite food
              and freshly brewed coffee.
            </p>

            <a href="#visit-message" className="contact-card-link">
              We'd love to see you ↗
            </a>
          </article>

        </div>
      </section>

      {/* VISIT BANNER */}
      <section className="contact-visit-banner" id="visit-message">
        <div className="contact-visit-content">
          <span className="contact-eyebrow">
            YOUR LITTLE CORNER OF HAPPINESS
          </span>

          <h2>
            Good coffee.
            <br />
            <span>Beautiful moments.</span>
          </h2>

          <p>
            Take a break from the busy day, enjoy something
            delicious, and make yourself at home at Lotus Cafe.
          </p>

          <Link to="/Menu" className="contact-menu-button">
            Explore Our Menu ↗
          </Link>
        </div>

        <div className="contact-visit-decoration">
         
          <p>Made with love, served with warmth.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="contact-footer">
        <Link to="/" className="contact-footer-logo">
           Lotus Cafe
        </Link>

        <p>A little warmth in every cup.</p>


        <div className="contact-footer-bottom">
          © {new Date().getFullYear()} Lotus Cafe. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Contact;