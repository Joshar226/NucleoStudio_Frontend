import { motion } from "motion/react";
import { beneficios, casos, equipo, servicios } from "../db/premiunDB";
import AgendaForm from "../components/premium/AgendaForm";
import ServicioCard from "../components/premium/ServicioCard";
import EquipoCard from "../components/premium/EquipoCard";
import CasoCard from "../components/premium/CasoCard";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

export default function PremiumLandingView() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <nav
        className="flex justify-between items-center p-2.5
        md:px-4
        lg:py-3.5 lg:px-12
      "
      >
        <img
          className="w-14
            lg:w-[75px]"
          loading="lazy"
          src="/premium/logo.webp"
          alt="Fisioterapia Logo"
        />

        <div
          className="C_premium-nav-contenido 
            text-[#239A95] flex font-bold text-sm gap-3
            md:text-lg md:gap-7
          "
        >
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#team">Equipo</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <header className="relative">
        <img
          loading="lazy"
          className="hidden
            lg:block
          "
          src="/premium/hero.avif"
          alt="Fisiotepista masajeando"
        />
        <img
          loading="lazy"
          className="block lg:hidden"
          src="/premium/hero-xl.avif"
          alt="Fisiotepista masajeando"
        />

        <div className="absolute inset-0 bg-black/45 flex justify-center items-center flex-col text-center gap-6
          md:gap-13
          lg:gap-8
          xl:gap-16
        ">
          <h3 className="text-white text-2xl
            md:text-5xl 
            lg:text-4xl
            xl:text-6xl
          ">
            Recupera tu movilidad
              <br /> 
            Mejora tu calidad de vida
          </h3>

          <div className="flex gap-10
            md:gap-24
          ">
            <a 
              className="bg-[#09A29B] text-white 
                C_premium-hero-btn" 
              href="#contact"
            >
              Agendar Cita
            </a>
            <a
              className=" bg-white 
                C_premium-hero-btn"
              href="#services"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </header>

      <section className="C_seccion">
        <h3 className=" text-[#239A95] 
          C_titulo-seccion"
        >
          Beneficios Clave
        </h3>
        <div className="
          grid grid-cols-2 gap-2.5 px-5
          md:flex justify-center  md:gap-10
          lg:gap-12
          xl:gap-36
        ">
          {beneficios.map((beneficio, i) => (
            <motion.p
              key={beneficio.titulo}
              className={`${i === 2 ? "col-span-2 md:col-span-1" : ""} bg-[#B2F7FF] text-center rounded-4xl
                text-xs py-2.5 px-1 
                md:text-base md:px-5
                lg:text-xl lg:px-6
                xl:text-2xl xl:px-8 
              `}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
              }}
            >
              {beneficio.titulo}
            </motion.p>
          ))}
        </div>
      </section>

      <section id="services" className="C_premiun-seccion-divisora">
        <h3 className="text-white 
          C_titulo-seccion"
        >
          Servicios
        </h3>
        <motion.div
          className="
            grid grid-cols-2 gap-y-7
            md:flex md:justify-evenly md:px-12
            xl:px-20
          "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {servicios.map((servicio) => (
            <ServicioCard key={servicio.titulo} servicio={servicio} />
          ))}
        </motion.div>
      </section>

      <section id="team" className="C_seccion">
        <h3 className="C_titulo-seccion">Nuestro Equipo</h3>

        <motion.div
          className="flex items-center justify-evenly"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {equipo.map((miembro) => (
            <EquipoCard key={miembro.nombre} miembro={miembro} />
          ))}
        </motion.div>
      </section>

      <section className="C_premiun-seccion-divisora">
        <h3 className="text-white 
          C_titulo-seccion"
        >
          Casos de éxito
        </h3>
        <motion.div
          className="flex justify-evenly items-center gap-5
            px-5
          "
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            x: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          viewport={{ once: true }}
        >
          {casos.map((caso) => (
            <CasoCard key={caso.nombre} caso={caso} />
          ))}
        </motion.div>
      </section>

      <AgendaForm />

      <footer className="bg-[#00413E] text-white
        py-6
        lg:py-12 
      ">
        <div className="grid grid-cols-3 items-center justify-items-center
          mb-2.5
          md:mb-5
        ">
          <div>
            <img 
              loading="lazy" 
              src="/premium/ubicacion.avif" 
              alt="Ubicacion" 
              className=" cursor-pointer transition-transform ease-in-out duration-300 hover:scale-105
                w-24
                md:w-48
                lg:w-64
                xl:w-96
                "
            />
            <p className=" text-center mt-2.5
              text-xs
              md:text-base
              lg:text-xl
            ">
              Lun - Sab <br /> 7am - 6pm
            </p>
          </div>

          <div className="flex flex-col 
            gap-2.5
            lg:gap-5"
          >
            <div className="C_premium-red">
              <FaWhatsapp className="C_premium-red-icon" />
              <p className="C_premium-red-texto">Whatsapp</p>
            </div>

            <div className="C_premium-red">
              <FaInstagram className="C_premium-red-icon" />
              <p className="C_premium-red-texto">Instagram</p>
            </div>

            <div className="C_premium-red">
              <FiFacebook className="C_premium-red-icon" />
              <p className="C_premium-red-texto">Facebook</p>
            </div>
          </div>

          <div className="text-center">
            <p className="C_premium-legales-texto">Aviso Legal</p>
            <p className="C_premium-legales-texto mt-2">Politica de Privacidad</p>
          </div>
        </div>

        <p className="text-center
          text-xs
          md:text-base
        ">
          &#169; {currentYear} Clínica de Fisioterapia Movimiento
        </p>
      </footer>
    </>
  );
}
