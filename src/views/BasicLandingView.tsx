import { FiFacebook } from "react-icons/fi";
import { servicios } from "../db/basicDC";
import { FaWhatsapp } from "react-icons/fa";

export default function BasicLandingView() {
  return (
    <>
      <nav
        className="bg-[#00403A] py-5 px-2 flex items-center justify-between 
        md:px-10 "
      >
        <div className="flex items-end">
          <img
            className="h-[50px] 
              md:h-[90px]"
            loading="lazy"
            src="/basic/logo.webp"
            alt="Belleza Natural Logo"
          />
          <h3
            className="text-[#8DC11F] text-sm ml-2.5 
            md:text-2xl"
          >
            Belleza Natural
          </h3>
        </div>

        <a className="text-white text-sm 
          md:text-2xl" href="#agenda"
        >
          Agendar Cita
        </a>
      </nav>

      <header className="relative">
        <img
          loading="lazy"
          src="/basic/hero_xl.avif"
          alt="Mujer Modelo"
          className="lg:hidden"
        />
        <img
          loading="lazy"
          src="/basic/hero.avif"
          alt="Mujer Modelo"
          className="hidden lg:block"
        />

        <div 
          className="absolute inset-0 flex justify-center items-center flex-col bg-black/45 
            gap-5
            md:gap-10
            lg:gap-15
          "
        >
          <h2 
            className="text-sm text-white text-center 
              md:text-3xl
              lg:text-4xl
              xl:text-5xl
            "
          >
            Soy Laura
            <br />
            Consultora de belleza natural
            <br />
            Te ayudo a brillar desde adentro hacia afuera
          </h2>
          <a
            className="text-white bg-[#00403A] text-sm py-2.5 px-6 hover:bg-[#00352f] 
              md:text-xl
              lg:text-2xl lg:px-8"
            href="#agenda"
          >
            Agendar Cita
          </a>
        </div>
      </header>

      <main>
        <section className="C_seccion">
          <h2 className="C_titulo-seccion">¿Que ofrezco?</h2>
          <div 
            className="
              grid grid-cols-2 gap-2.5 px-5
              md:flex md:justify-evenly

            
            ">
            {servicios.map((servicio, i) => (
              <h3 
                key={servicio.titulo} 
                className={`bg-[#00352f] text-white text-center
                  text-sm py-2.5 ${i === 2 && 'col-span-2'} 
                  md:text-base md:py-3 md:px-5 
                  lg:text-xl
                  xl:text-2xl xl:px-10
                `}
                  
                
              >
                {servicio.titulo}
              </h3>
            ))}
          </div>

          <div className="flex justify-evenly 
            mt-7
            lg:mt-10
            xl:mt-12
          ">
            <div className="C_basic-red">
              <FaWhatsapp className="C_basic-red-icon" />
              <p className="C_basic-red-texto">Whatsapp</p>
            </div>
            <div className="C_basic-red">
              <FiFacebook className="C_basic-red-icon" />
              <p className="C_basic-red-texto">Facebook</p>
            </div>
          </div>
        </section>

        <section>
          <img
            loading="lazy"
            src="/basic/modelo_xl.avif"
            alt="Mujer Modelo"
            className="lg:hidden"
          />
          <img
            loading="lazy"
            src="/basic/modelo.avif"
            alt="Mujer Modelo"
            className="hidden lg:block"
          />
        </section>
      </main>

      <footer className="bg-[#00403A] text-white flex justify-evenly text-center
        py-3 
        md:py-5
        xl:py-8     
      ">
        <div className="C_basic-footer-contenedor">
          <h3>Horario</h3>
          <p>Lunes a Viernes</p>
          <p>9am - 6pm</p>
        </div>
        <div className="C_basic-footer-contenedor">
          <h3>Dirección</h3>
          <p>San José, Costa Rica</p>
        </div>
      </footer>
    </>
  );
}
