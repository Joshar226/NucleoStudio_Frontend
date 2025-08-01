import { motion } from "motion/react";
import Slider from "../components/Slider";
import Form from "../components/Form";
import Servicios from "../components/sections/Servicios";
import Ventajas from "../components/sections/Ventajas";

export default function HomeView() {
  return (
    <>
      <div
        className="text-center uppercase font-bold flex flex-col items-center
          px-4 mt-14 gap-5
          md:mt-32 md:gap-7
          xl:mt-40 xl:gap-10
        "
      >
        <h2
          className="
            text-lg
            md:text-2xl
            lg:text-4xl
            xl:text-5xl 
          "
        >
          Creamos sitios web que conectan <br />
          con tus clientes <br />
          <span className="text-[#53EAFD]">
            Diseño moderno, responsive <br />y orientado a resultados
          </span>
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            y: { type: "spring", visualDuration: 0.6, bounce: 0.35 },
          }}
        >
          <a
            href="#contact"
            className="bg-[#0098B0] uppercase font-bold text-center shadow-lg shadow-cyan-600 rounded-xl 
              w-full py-2 text-lg
              md:py-3 md:text-xl md:w-auto md:px-10
              lg:w-auto lg:px-10 lg:text-2xl

              transition-all hover:scale-110 hover:shadow-xl  active:scale-110 active:shadow-xl duration-300
            "
          >
            Cotizar Proyecto
          </a>
        </motion.div>
      </div>

      <Servicios />

      <Ventajas />

      <section
        className="
          mt-36 
          lg:mt-44
          xl:mt-52
        "
      >
        <h3 className="C_titulo-seccion">Tecnologías</h3>
        <Slider />
      </section>

        <section 
          className="
            mt-36
            md:px-20
            lg:mt-44
            xl:mt-52
          ">
          <Form />
        </section>
    </>
  );
}
