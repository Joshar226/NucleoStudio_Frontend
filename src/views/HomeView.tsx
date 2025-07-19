import { FaLongArrowAltDown, FaLongArrowAltUp, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { planes, servicios } from "../db/homeDB";
import ServicioCard from "../components/home/ServicioCard";
import { motion } from "motion/react";
import PlanCard from "../components/home/PlanCard";

export default function HomeView() {
  return (
    <div className='bg-[#0D0D0D] text-white home-tipografia' >
      <nav className="flex
        flex-col items-center gap-4 py-2.5
        md:flex-row md:px-5 md:py-3.5 md:justify-between
      ">
        <img 
          src="home/logo.webp" 
          alt="Nucleo Studio logo" 
          className="
            w-20
            lg:w-24
            xl:w-28
          "
        />
        
        <div className=" text-center
          grid grid-cols-5 text-sm gap-2.5
          md:flex md:text-base md:*:border-r-2 md:*:border-white md:*:pr-2.5 md:*:last:border-none md:*:last:px-0
          lg:gap-4
          xl:text-lg xl:gap-5
          
          *:transition-transform *:hover:scale-110 *:active:scale-110 *:duration-200 *:ease-in-out 
        ">
          <a href="#">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#planes">Planes</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
          <a href="" className="flex items-center col-span-6 justify-center
            gap-1
          ">
            <FaWhatsapp size={'full'} className="
              w-5
              lg:w-6
            " />
            <p>WhatsApp</p>
          </a>
        </div>
      </nav>

      <main>
        <motion.section 
          className="text-center uppercase font-bold
              px-4 mt-14
              md:mt-32
              xl:mt-40
            "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
          <h2 className="
            text-lg 
            md:text-2xl
            lg:text-4xl
            xl:text-5xl 
          ">Creamos sitios web que conectan <br />
            con tus clientes <br />
            <span className="text-[#53EAFD]">Diseño moderno, responsive <br />
              y orientado a resultados
            </span>
          </h2>

          <div className="flex justify-evenly items-center
            text-sm mt-7
            md:text-xl md:mt-10
            lg:text-2xl lg:mt-16
            xl:text-3xl xl:mt-20

            *:transition-all *:hover:scale-105 *:active:scale-105 *:duration-300 *:ease-in-out
          ">
            <a href="#planes" className="text-shadow-white hover:text-shadow-md active:text-shadow-md">Ver planes</a>
            <a href="#contacto" className="bg-[#00D3F2] shadow-lg shadow-cyan-500 hover:shadow-xl active:shadow-xl
              py-1 px-3
              xl:py-2 xl:px-5
            ">Cotizar Proyecto</a>
          </div>
        </motion.section>

        <section className="
          mt-36 px-5
          md:px-20
          lg:mt-80
          xl:mt-96
        ">
          <h3 className="C_titulo-seccion">Servicios</h3>

          <div 
            className="flex flex-col
              gap-7
              lg:grid lg:grid-cols-2
              xl:grid-cols-4
            "
            
          >
            {servicios.map( servicio => <ServicioCard key={servicio.titulo} servicio={servicio}/> )}
          </div>

          <motion.div
            className="flex flex-col items-center w-full"
            initial={{opacity: 0, x:-100}}
            whileInView={{opacity: 1, x:0}}
            viewport={{once: true}}
          >
            <a 
              href="#contacto"
              className="bg-[#00D3F2] uppercase font-bold text-center shadow-lg shadow-cyan-500 rounded-xl
                w-full py-2 text-lg mt-10
                md:py-3 md:text-xl md:mt-14
                lg:w-auto lg:px-10 lg:text-2xl lg:mt-16
                xl:mt-20

                transition-all hover:scale-110 hover:shadow-xl  active:scale-110 active:shadow-xl duration-300
              "
            >Solicitar Cotización</a>

            <a 
              href="#"
              className="flex items-center
                mt-8 gap-2.5
                md:mt-10 
                lg:mt-11
                xl:mt-14

                transition-transform hover:scale-110 active:scale-110 duration-300
              "  
            >
              <FaWhatsapp size={'full'} className="
                w-8
                md:w-9
                lg:w-10
                xl:w-11
              " />
              <p className="
                text-lg
                md:text-xl
                xl:text-2xl
              "
            >WhatsApp</p></a>
          </motion.div>
        </section>

        <section className="
          mt-40 px-5
          md:mt-44 md:px-36
          lg:mt-80 lg:px-22
          xl:px-40
        ">
          <h3 className="C_titulo-seccion">Planes</h3>

          <div 
            className="flex flex-col
              gap-7
              md:gap-10
              lg:grid lg:grid-cols-2
              xl:grid-cols-3

              lg:*:last:col-span-2 lg:*:last:mx-auto lg:*:max-w-[400px]

              xl:*:last:col-span-1 xl:*:last:mx-0 xl:*:max-w-full
            "
            
          >
            {planes.map( plan => <PlanCard key={plan.titulo} plan={plan} /> )}
          </div>
        </section>

        <section className="
            mt-40 
            md:mt-44 
            lg:mt-80"
          >
          <h3 className="C_titulo-seccion">Proceso de trabajo</h3>

          <div className="flex border-b-2 border-b-white">
            <div className="flex flex-col items-center ">
              <p>Entendemos tu necesidad</p>
              <FaLongArrowAltDown />
            </div>
            <div className="flex flex-col items-center translate-10">
              <p>Diseñamos tu sitio personalizado</p>
              <div className="w-16">
                <FaLongArrowAltUp className="w-full h-full"/>
              </div>
            </div>
            
          </div>
        </section>

      </main>

      <footer>

      </footer>


      {/* <Link to={'/pagina-basica'}>Basica</Link>
      <Link to={'/pagina-estandar'}>Estandar</Link>
      <Link to={'/pagina-premium'}>Premium</Link> */}
    </div>
  )
}
