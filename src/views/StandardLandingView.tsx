import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"
import ServicioCard from "../components/standard/ServicioCard"
import './../styles/standard.css'

export default function StandarLandingView() {

  const servicios = [
    {
      titulo: 'Corte clásico',
      img: 'corte_clasico'
    },
    {
      titulo: 'Cuidado de barba',
      img: 'cuidado_barba'
    },
    {
      titulo: 'Afeitado tradicional',
      img: 'afeitado_tradicional'
    },
  ]

  return (
    <div className="standard-tipografia">
      <nav className="standard-nav">
        <a href="#home" className="standard-logo">
          <img loading="lazy" src="/standard/logo.webp" alt="El vierjo barbero logo" />
          <p>El viejo barbero</p>
        </a>

        <div className="standard-nav-contenido">
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#about-us">Por que elegirnos</a>
          <a href="#agenda">Contáctanos</a>
        </div>
      </nav>

      <header id="home" className="standard-hero">
        <img loading="lazy" src="/standard/hero.webp" alt="Hombre haciendose la barba" />
        <div className="standard-hero-contenido">
          <h2>Cortes con estilo <br /> Atencion con clase</h2>
          <h3>Descubrí la experiencia única en Barbería Central <br /> Estilo, detalle y tradición.</h3>
          <p className="standard-agenda-btn">Programe su cita</p>
        </div>
      </header>
      <div className="standard-hero-barra"></div>

      <section id="services" className="standard-servicios">
        <h2>Servicios</h2>

        <div className="standard-servicios-contenido">
          {servicios.map( servicio => <ServicioCard key={servicio.titulo} servicio={servicio}/> )}
        </div>
      </section>

      <section id="about-us" className="standard-escogencia">
        <h2>¿Por qué elegirnos?</h2>

        <div className="standard-escogencia-contenido">
          <p>Atención personalizada</p>
          <p>Citas fáciles por WhatsApp</p>
          <p>Estilistas con experiencia</p>
          <p>Clientes satisfechos</p>
        </div>

        <p>En El Viejo Barbero no solo te cortamos el cabello, te damos estilo</p>
      </section>

      <section id="agenda" className="standard-agenda">
        <img loading="lazy" src="/standard/agenda.avif" alt="Barberia" />

        <div className="standard-agenda-contenido">
          <div>
            <h3>¿Listo para tu nuevo look?</h3>
            <p> Agenda tu cita ahora por WhatsApp</p>
          </div>
          <a className="standard-agenda-btn" href="#agenda">Programe su cita</a>
        </div>
      </section>

      <footer className="standard-footer">
        <div className="standard-horarios">
          <p>Lun - Sab <br /> 7am - 6pm</p>
          <p>Dom <br /> 8am - 4pm</p>
        </div>

        <div className="standard-redes">
          <div className="standard-red">
            <div className="standard-red-icon">
              <FaWhatsapp size={'full'} />
            </div>
            <p>WhatsApp</p>
          </div>

          <div className="standard-red">
            <div className="standard-red-icon">
              <FaInstagram size={'full'}/>
            </div>
            <p>Instagram</p>
          </div>

          <div className="standard-red">
            <div className="standard-red-icon">
              <FaFacebookF size={'full'} />
            </div>
            <p>Facebook</p>
          </div>
        </div>

        <div className="standard-ubicacion">
          <img loading="lazy" src="/standard/ubicacion.avif" alt="Ubicacion de la barberia" />
          <p>500 metros sur desde la biblioteca</p>
        </div>
      </footer>
    </div>
  )
}
