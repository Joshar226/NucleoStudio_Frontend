import { ventajas } from "../../db/homeDB";
import { motion } from "motion/react";

export default function Ventajas() {
  return (
    <div
      className="
        mt-36 px-5
        md:px-20
        lg:mt-44
        xl:mt-52
      "
    >
      <h3 className="C_titulo-seccion">¿Porque tu negocio deberia de tener una Pagina Web?</h3>

      <div 
        className="flex 
          flex-col px-7
          lg:grid lg:grid-cols-2 lg:gap-x-15 lg:gap-y-6 lg:*:last:col-span-2
          xl:grid-cols-5 xl:*:last:col-span-1 xl:*:border-none

          *:last:border-none *:last:pb-0 
          *:first:pt-0
        ">
        {ventajas.map( ventaja => (
          <motion.div 
            key={ventaja.titulo}
            className="flex flex-col items-center flex-1/5 border-b-2 border-b-neutral-800
              py-5 gap-0.5
            "
            initial={{opacity: 0, x: -150}}
            whileInView={{opacity: 1, x: 0}}
            transition={{
              duration: 0.4,
              x: { type: 'spring', visualDuration: 0.6, bounce: 0.5 }
            }}
            viewport={{amount: 0.5}}
          >
            <div className="w-10">
              {ventaja.icon}
            </div>
            <h3 
              className="font-bold text-center
                text-xl
                lg:text-2xl
              ">{ventaja.titulo}</h3>
            <p 
              className="text-center
                text-lg  
            ">{ventaja.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}



// 💸 Clientes que buscan en línea y no te encuentran
// Hoy la mayoría de personas busca en Google antes de comprar. Si no tienes presencia web, simplemente no existes para ellos.

// 🚫 Pérdida de credibilidad
// Un negocio sin página web genera desconfianza. Tener una web profesional demuestra seriedad y compromiso con tus clientes.

// 🕒 Ventas solo en horario limitado
// Una página web trabaja 24/7, incluso mientras dormís. Si solo vendés en horario comercial, estás dejando dinero sobre la mesa.

// 📉 Dependencia total de redes sociales
// Las redes cambian sus algoritmos constantemente. Tu web es un canal propio, estable y sin intermediarios.

// 🌎 Limitación geográfica
// Con una web podés llegar a más clientes, incluso fuera de tu ciudad. Sin ella, solo te conoce quien pasa por tu local.