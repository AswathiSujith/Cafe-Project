import { Link } from "react-router-dom";

import Image1 from "./assets/Lotuscafe.jpg";
import Image2 from "./assets/coffee2.jpg";
import Image3 from "./assets/Sandwitch.jpg";
import Image4 from "./assets/Coffebean.jpg";
import Image5 from "./assets/Milk.jpg";
import Image7 from "./assets/clubsandwitch.jpg" 
import Image8 from "./assets/bread.jpg"
import Image9 from "./assets/c5.jpg"
import Image10 from "./assets/Lotus.jpg";


import "./Menu.css";

function Menu() {
  const menuItems = [
    {
      image: Image1,
      number: "01",
      category: "THE EXPERIENCE",
      title: "A Cozy Cafe Ambience",
      description:
        "The café has a warm and inviting ambience, with soft lighting, cozy seating, and elegant interior décor that creates a relaxing atmosphere. The aroma of freshly brewed coffee fills the air, while gentle music and the quiet chatter of customers add to its charm.",
    },
    {
      image: Image2,
      number: "02",
      category: "OUR FAVOURITE",
      title: "Freshly Brewed Coffee",
      description:
        "Our freshly brewed coffee is rich in aroma and flavour, beautifully presented with simple flower-shaped latte art. The delicate floral design adds a touch of elegance to every cup.",
    },
   
    {
      image: Image3,
      number: "04",
      category: "FRESH & DELICIOUS",
      title: "Avocado Egg Toast",
      description:
        "A delicious blend of fresh, creamy avocado spread over perfectly toasted bread, topped with a beautifully cooked egg. Herbs and spices complete this combination of crispy texture and wholesome goodness.",
    },
    {
      image: Image5,
      number: "05",
      category: "MADE YOUR WAY",
      title: "Milk & Alternatives",
      description:
        "Choose from creamy whole milk, light skimmed milk, and plant-based alternatives like oat, almond, and soy milk. There is a perfect choice for every taste and preference.",
    },
 
  
     {
      image: Image7,
      number: "06",
      category: "MADE WITH LOVE",
      title: "Club Sandwiches",
      description:
        "Layered grilled chicken, crispy bacon, fresh lettuce, and tomato with creamy aioli on toasted pullman loaf.",
    },
     {
      image: Image9,
      number: "07",
      category: "LOVELY JAM",
      title: "Jam Rolls & Tarts",
      description:
        "   Soft, fluffy sponge cake swirled with sweet mixed berry jam and sliced into perfect bite-sized circles.. & Crisp, buttery pastry shells filled with rich, creamy custard and finished with sweet toppings.",
     },
     {
        image: Image8,
      number: "08",
      category: "DIRECT FROM THE OVEN",
      title: "Cookie & Crossiant",
      description:
        " Double the treats! buttery chocolate croissants and  gooey chocolate chip cookies, complete with a sweet dipping sauce on the side "
     },
     {
        image: Image10,
      number: "09",
      category: "HOT & SOUR",
      title: "Lotus Seed Noodle",
      description:
        " Chewy, delicate noodles made with healthy lotus seeds, wok-tossed with fresh vegetables and a savory glaze. Light, nutritious, and delicious.  "
     },


  ];

  return (
    <div className="lotus-menu-page">

      {/* NAVIGATION */}
      <nav className="menu-navbar">
        <Link to="/" className="menu-logo">
           Lotus <span>Cafe</span>
        </Link>

        <div className="menu-nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Menu" className="menu-nav-active">Menu</Link>
          <Link to="/Contact">Contact</Link>
        </div>

       
      </nav>

      {/* HERO */}
      <header className="menu-hero">
        <span className="menu-eyebrow">
          ✦ &nbsp; DISCOVER LOTUS CAFE
        </span>

        <h1>
          A little taste
          <br />
          of <span>happiness.</span>
        </h1>

        <p>
          From the first sip of coffee to the last delicious
          bite, discover the little things that make Lotus
          Cafe special.
        </p>

   

      
      </header>

 


      {/* MENU COLLECTION */}
      <section className="menu-collection" id="menu-collection">
        <div className="menu-section-heading">
          <span className="menu-eyebrow">GOOD THINGS ARE BREWING</span>

          <h2>
            Explore Our <span>Specials</span>
          </h2>

          <p>
            A closer look at the coffee, food, and atmosphere
            that make every visit memorable.
          </p>
        </div>

        <div className="menu-card-grid">
          {menuItems.map((item) => (
            <article className="lotus-menu-card" key={item.number}>
              <div className="menu-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="menu-card-number">
                  {item.number}
                </span>
              </div>

              <div className="menu-card-content">
                <span className="menu-card-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

               
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="menu-closing-banner">
        <span className="closing-coffee-icon"></span>

        <h2>
          Your next favourite
          <br />
          <span>moment awaits.</span>
        </h2>

        <p>
          Good coffee, delicious food, and a cosy place
          to call your own.
        </p>

        <Link to="/Contact" className="menu-closing-button">
          Come Say Hello ↗
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="menu-footer">
        <Link to="/" className="menu-footer-logo">
           Lotus Cafe
        </Link>

        <p>A little warmth in every cup.</p>

    
        <div className="menu-footer-bottom">
          © {new Date().getFullYear()} Lotus Cafe. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Menu;