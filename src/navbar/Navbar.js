import "./Navbar.css";
import { Link } from "react-router-dom";
import img1 from "../img/FondoMK1.png";
import img2 from "../img/FondoMK2.png";
import img3 from "../img/FondoMK3.png";

const images = [img1, img2, img3];

export const Navbar = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <main>
      <section
        className="paralax"
        style={{ backgroundImage: `url(${randomImage})` }}
      >
        <div className="paralax-content">
          <h1>Audi TT</h1>
        </div>
      </section>

      <section className="tarjetas">
        <Link to="/models/mk1" className="card mk1"></Link>
        <Link to="/models/mk2" className="card mk2"></Link>
        <Link to="/models/mK3" className="card mk3"></Link>
      </section>

      <footer>
        <p>Projecte fet per Dennis Molina — 2025</p>
      </footer>
    </main>
  );
};
