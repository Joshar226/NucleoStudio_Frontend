import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ServicioCard from "../components/standard/ServicioCard";

export default function StandarLandingView() {
  const servicios = [
    {
      titulo: "Corte clásico",
      img: "corte_clasico",
    },
    {
      titulo: "Cuidado de barba",
      img: "cuidado_barba",
    },
    {
      titulo: "Afeitado tradicional",
      img: "afeitado_tradicional",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <nav
        className="flex shadow-2xl items-center
          p-2.5 flex-col gap-4 
          md:p-5 md:flex-row md:justify-between
        "
      >
        <div className="flex flex-col items-center gap-1.5">
          <img
            loading="lazy"
            src="/standard/logo.webp"
            alt="El vierjo barbero logo"
            className="
              w-20
              lg:w-32
            "
          />
          <p
            className="font-bold text-center
              text-base
              md:text-lg 
            "
          >
            El viejo barbero
          </p>
        </div>

        <div
          className="flex font-bold
          gap-2.5 text-xs
          md:text-base md:gap-6
          lg:text-xl lg:gap-8
          xl:gap-10

          C_standard-nav-contenido
        "
        >
          <a>Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#about-us">Por que elegirnos</a>
          <a href="#agenda">Contáctanos</a>
        </div>
      </nav>

      <header className="relative">
        <img
          loading="lazy"
          src="/standard/hero_xl.avif"
          alt="Hombre haciendose la barba"
          className="lg:hidden"
        />
        <img
          loading="lazy"
          src="/standard/hero.avif"
          alt="Hombre haciendose la barba"
          className="hidden lg:block"
        />
        <div
          className="absolute inset-0 bg-black/45 flex justify-center items-center flex-col text-white text-center
          gap-4
          md:gap-8
          xl:gap-9
        "
        >
          <h2
            className="
            text-xl
            md:text-4xl
            xl:text-5xl
          "
          >
            Cortes con estilo <br /> Atencion con clase
          </h2>
          <h3
            className="
            text-xs
            md:text-2xl
            xl:text-3xl
          "
          >
            Descubrí la experiencia única en Barbería Central <br /> Estilo,
            detalle y tradición.
          </h3>
          <p className="C_standard-agenda-btn">Programe su cita</p>
        </div>
      </header>
      <div
        className="w-[120%] bg-white
        -rotate-2 -translate-y-5 h-8
        md:-translate-y-16 md:h-20
        lg:-translate-y-11 lg:h-16
        xl:-translate-y-24 xl:-rotate-2 xl:h-32
      "
      ></div>
      <section id="services" className="
        mb-[100px]
        md:mb-[150px]
      ">
        <h2 className="C_titulo-seccion">Servicios</h2>

        <div className="flex justify-evenly">
          {servicios.map((servicio) => (
            <ServicioCard key={servicio.titulo} servicio={servicio} />
          ))}
        </div>
      </section>

      <section id="about-us">
        <h2 className="C_titulo-seccion">¿Por qué elegirnos?</h2>

        <div
          className="grid grid-cols-2 
          gap-y-5
          lg:gap-y-10

          C_standard-escogencia-contenido"
        >
          <p>Atención personalizada</p>
          <p>Citas fáciles por WhatsApp</p>
          <p>Estilistas con experiencia</p>
          <p>Clientes satisfechos</p>
        </div>

        <p
          className=" text-center
          text-xs mt-5 mb-14
          md:text-base md:mt-7
          xl:text-xl xl:mt-10
        "
        >
          En El Viejo Barbero no solo te cortamos el cabello, te damos estilo
        </p>
      </section>

      <section id="agenda" className="relative">
        <img
          loading="lazy"
          src="/standard/agenda_xl.avif"
          alt="Barberia"
          className="lg:hidden"
        />
        <img
          loading="lazy"
          src="/standard/agenda.avif"
          alt="Barberia"
          className="hidden lg:block"
        />

        <div
          className="absolute inset-0 bg-black/40 flex justify-center items-center flex-col text-white text-center
            gap-4
            md:gap-8
            xl:gap-9
        "
        >
          <h3
            className="
            text-xl
            md:text-4xl
            xl:text-5xl
          "
          >
            ¿Listo para tu nuevo look?
          </h3>
          <p
            className="
            text-sm
            md:text-2xl
            xl:text-3xl
          "
          >
            {" "}
            Agenda tu cita ahora por WhatsApp
          </p>
          <a className="C_standard-agenda-btn" href="#agenda">
            Programe su cita
          </a>
        </div>
      </section>

      <footer
        className="bg-[#1F1F1F] text-white grid grid-cols-3 text-center
        py-3.5 text-[10px]
        md:py-5 md:text-base
        lg:py-7 lg:text-xl
      "
      >
        <div className="flex justify-evenly">
          <p>
            Lun - Sab <br /> 7am - 6pm
          </p>
          <p>
            Dom <br /> 8am - 4pm
          </p>
        </div>

        <div
          className="flex flex-col items-center
          gap-2.5
          md:gap-5
          lg:gap-8
          xl:gap-10

        "
        >
          <div className="standard-red">
            <div className="standard-red-icon">
              <FaWhatsapp size={"full"} />
            </div>
            <p>WhatsApp</p>
          </div>

          <div className="standard-red">
            <div className="standard-red-icon">
              <FaInstagram size={"full"} />
            </div>
            <p>Instagram</p>
          </div>

          <div className="standard-red">
            <div className="standard-red-icon">
              <FaFacebookF size={"full"} />
            </div>
            <p>Facebook</p>
          </div>
        </div>

        <div>
          <img
            loading="lazy"
            src="/standard/ubicacion.avif"
            alt="Ubicacion de la barberia"
            className="cursor-pointer my-0 mx-auto
              w-24
              md:w-48
              lg:w-2xs
              xl:w-80
            "
          />
          <p
            className=" mt-1
            md:text-sm
            xl:text-base
          "
          >
            500 metros sur desde la biblioteca
          </p>
        </div>
      </footer>
    </div>
  );
}
