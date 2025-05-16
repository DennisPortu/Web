import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <main>
      <section className="paralax">
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
