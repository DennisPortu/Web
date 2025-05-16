import "./Navbar.css";

export const Navbar = () => {
  return (
    <main>
      <section className="paralax">
        <div className="paralax-content">
          <h1>Audi TT</h1>
        </div>
      </section>

      <section className="tarjetas">
        <link to="../mk1/mk1" className="card mk1"></link>
        <link to="../mk2/mk2" className="card mk2"></link>
        <link to="../mk3/mK3" className="card mk3"></link>
      </section>

      <footer>
        <p>Projecte fet per Dennis Molina — 2025</p>
      </footer>
    </main>
  );
};
