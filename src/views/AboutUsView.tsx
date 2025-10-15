import { Helmet } from "react-helmet-async";
import { nosotros } from "../db/homeDB";
import { motion } from "motion/react";

export default function AboutUsView() {
  return (
    <div>
      <Helmet>
        <title>Sobre Nosotros - Nucleo Studio</title>
        <meta name="description" content="Conoce quienes somos, nuestra misión y que nos diferencia"/>
        <link rel="canonical" href="https://www.nucleostudiocr.com/about" />
      </Helmet>

      <h1 className="C_titulo-seccion mt-10
        mx-7
        md:mx-20 md:mt-20
      ">Creamos sitios web que conectan con tus clientes</h1>

      <div>
        {nosotros.map( item => (
          <>
            <h3 className=" text-center font-bold  mt-20 mb-1
              text-2xl
              xl:text-3xl
            ">{item.titulo}</h3>
            <p className="border-b-2 border-b-neutral-800 pb-10 text-center
              px-7
              md:mx-20
              lg:mx-32
              xl:mx-96 xl:text-lg

              a
            ">{item.descripcion}</p>
          </>
        ))}
      </div>

      <motion.div
          className="
            mt-6
            md:my-16
            flex justify-center
          "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            y: { type: "spring", visualDuration: 0.6, bounce: 0.35 },
          }}
        >
          <a
            href="https://wa.me/50662830706"
            className="bg-[#0098B0] uppercase font-bold text-center shadow-lg shadow-cyan-600 rounded-xl 
              px-9 py-2 text-lg
              md:py-3 md:text-xl md:w-auto md:px-10
              lg:w-auto lg:px-10 lg:text-2xl

              transition-all hover:scale-110 hover:shadow-xl  active:scale-110 active:shadow-xl duration-300
            "
            target="_blank"
          >
            Cotizar Proyecto
          </a>
        </motion.div>
    </div>
  )
}
