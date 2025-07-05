import { motion } from "motion/react"
import { useState } from "react";
import './../styles/premium.css'
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
import { es } from "react-day-picker/locale";
import { beneficios, casos, equipo, servicios } from "../db/premiunDB";
import { toast } from "react-toastify";

export default function PremiumLandingView() {

  const today = new Date()
  const [date, setDate] = useState<Date>();
  const [hora, setHora] = useState<string>('06:00')

  const handleChangeHora = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hora = e.target.value

    if(hora >= '06:00' && hora <= '18:00') {
      setHora(hora)
    } else {
      toast.error('Hora fuera de rango')
    }
    
  }

  return (
    <div className="premium-tipografia">
      <nav className="premium-nav">
        <img src="/premium/logo.webp" alt="" />

        <div className="premium-nav-contenido">
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#team">Equipo</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <header className="premium-header">
        <img src="/premium/hero.avif" alt="Fisiotepista masajeando" />
        <img src="/premium/hero.jpg" alt="Fisiotepista masajeando" />

        <div className="premium-header-contenido">
          <h3>Recupera tu movilidad <br /> Mejora tu calidad de vida</h3>

          <div className="premium-header-contenido-links">
            <a className="sombra" href="#agenda">Agendar Cita</a>
            <a className="sombra" href="#servicios">Ver Servicios</a>
          </div>
        </div>
      </header>

      <section className="premium-beneficios">
        <h3>Beneficios Clave</h3>

        <div className="premium-beneficios-contenido">
          {beneficios.map( beneficio => (
            <motion.p 
              key={beneficio.titulo}
              className="sombra" 
              initial={{opacity: 0, scale: 0}} 
              animate={{opacity: 1, scale: 1}}
              transition={{
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.6 }
              }}
            >{beneficio.titulo}</motion.p>
          ))}
        </div>
      </section>

      <section id="services" className="premium-servicios">
        <h3>Servicios</h3>
        <motion.div 
          className="premium-servicios-contenedor"
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.4 }}
          viewport={{once: true}}
        >
          { servicios.map( servicio => (
            <div key={servicio.titulo} className="premium-servicio">
              <img src={`/premium/${servicio.img}.webp`} alt={servicio.titulo} />
              <p>{servicio.titulo}</p>
              <p className="premium-servicio-descripcion sombra">{servicio.descripcion}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="team" className="premium-equipo">
          <h3>Nuestro Equipo</h3>

          <motion.div 
            className="premium-equipo-contenedor"
            initial={{opacity: 0, y: 100}}  
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.4}}
            viewport={{once: true}}
          >
            { equipo.map( miembro => (
              <div key={miembro.nombre} className="premium-miembro">
                <img src={`/premium/${miembro.img}.avif`} alt={`Trabajador de ${miembro.area}`} />
                <p>{miembro.nombre}</p>
                <p>{miembro.area}</p>
              </div>
            ) )  }
          </motion.div>
      </section>

      <section className="premium-casos">
        <h3>Casos de éxito</h3>

        <motion.div 
          className="premium-casos-contenedor"
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={{ 
            duration: 0.4,
            x: { type: 'spring', visualDuration: 0.4, bounce: 0.5 }
          }}
          viewport={{once: true}}  
        >
          { casos.map( caso => (
            <div key={caso.nombre} className="premium-caso">
              <p>{caso.nombre}</p>
              <p>{caso.caso}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <form className="premium-agenda">
        <div>
          <h3>Agenda Rápida</h3>

          <div id="contact" className="premium-agenda-contenedor"> 
            <div className="premium-inputs">
              <input className="sombra" type="text" placeholder="Tu Nombre"/>
              <input className="sombra" type="number" placeholder="Tu Numero"/>
              <textarea className="sombra" placeholder="Mensaje"></textarea>
            </div>

            <div className="premium-dia">
              <div className="premium-calendario sombra">
                <DayPicker
                  animate
                  mode="single"
                  startMonth={today}
                  selected={date}
                  onSelect={setDate}
                  required
                  locale={es}
                  disabled={[{before: today}, {dayOfWeek: 0}]}
                />
              </div>

              <input 
                type="time"
                value={hora}
                onChange={(e) => handleChangeHora(e)}
                min={'07:00'}
                max={'18:00'} 
                className="premium-input-hora sombra"  
              />

            </div>
          </div>

          <button
            type="submit"
            className="premium-agenda-submit"
          >Enviar Cita</button>
        
        </div>
      </form>

      <footer>

      </footer>

    </div>
  )
}
