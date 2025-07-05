import './../styles/basic.css'

export default function BasicLandingView() {
  return (
    <div className="basic-tipografia">
      <nav className="basic-nav">
        <div className="basic-logo-contenido">
          <img src="/basic/logo.webp" alt="Belleza Natural Logo" />
          <h3>Belleza Natural</h3>
        </div>

        <a href="#agenda">Agendar Cita</a>
      </nav>

      <header className="basic-hero">
        <img loading="lazy" src="/basic/hero.webp" alt="Mujer Modelo" />
        <div className="basic-hero-content">
          <h2>Soy Laura<br />
            Consultora de belleza natural<br />
            Te ayudo a brillar desde adentro hacia afuera
          </h2>
          <a className="basic-btn-agenda" href="#agenda">Agendar Cita</a>
        </div>
      </header>

      <main>
        <section className="basic-servicio">
          <h2>Descripción del servicio</h2>
          <p>Ayudo a personas a recuperar la confianza en sí mismas<br />a través de rutinas de cuidado facial</p>
          <a className="basic-btn-agenda" href="#agenda">Agendar Cita</a>
        </section>

        <section>
          <img loading="lazy" className="basic-modelo-img" src="/basic/modelo.webp" alt="Mujer Modelo" />
        </section>
      </main>

      <footer className="basic-footer">
        <div>
          <h3>Horario</h3>
          <p>Lunes a Viernes</p>
          <p>9am - 6pm</p>
        </div>

        <div>
          <h3>Dirección</h3>
          <p>San José, Costa Rica</p>
        </div>
      </footer>

    </div>
  )
}
