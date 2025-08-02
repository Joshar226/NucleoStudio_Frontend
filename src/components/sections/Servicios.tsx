import { motion } from "motion/react";
import { servicios } from "../../db/homeDB";
import ServicioCard from "../cards/ServicioCard";
import { FaWhatsapp } from "react-icons/fa";

export default function Servicios() {
  return (
    <div
        className="
          mt-36 px-5
          md:px-20
          lg:mt-80
          xl:mt-96
        "
    >
      <h3 className="C_titulo-seccion">Servicios</h3>

      <div
        className="flex flex-col gap-7
          lg:grid lg:grid-cols-2
          xl:grid-cols-4
        "
      >
        {servicios.map((servicio) => (
          <ServicioCard key={servicio.titulo} servicio={servicio} />
        ))}
      </div>

      <motion.div
        className="flex flex-col items-center w-full"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <a
            href="#contact"
            className="bg-[#0098B0] uppercase font-bold text-center shadow-lg shadow-cyan-600 rounded-xl
              w-full py-2 text-lg mt-10
              md:py-3 md:text-xl md:mt-14
              lg:w-auto lg:px-10 lg:text-2xl lg:mt-16
              xl:mt-20

              transition-all hover:scale-110 hover:shadow-xl  active:scale-110 active:shadow-xl duration-300
            "
        >
          Solicitar Cotización
        </a>

        <a
            href="https://wa.me/50687468528"
            target="_blank"
            className="flex items-center
              mt-8 gap-2.5
              md:mt-10 
              lg:mt-11
              xl:mt-14

              transition-transform hover:scale-110 active:scale-110 duration-300
            "
        >
          <div
            className="
              w-8
              md:w-9
              lg:w-10
              xl:w-11
            "
          >
            <FaWhatsapp className="w-full h-full" />
          </div>
          <p
            className="
              text-lg
              md:text-xl
              xl:text-2xl
            "
          >
            WhatsApp
          </p>
        </a>
      </motion.div>
    </div>
  );
}
