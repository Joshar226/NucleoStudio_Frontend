import Form from "../components/Form";
import { nosotros } from "../db/homeDB";

export default function AboutUsView() {
  return (
    <div>

      <h2 className="C_titulo-seccion mt-10
        mx-7
        md:mx-20 md:mt-20
      ">Creamos sitios web que conectan con tus clientes</h2>

      <div>
        {nosotros.map( item => (
          <>
            <h2 className=" text-center font-bold  mt-20 mb-1
              text-2xl
              xl:text-3xl
            ">{item.titulo}</h2>
            <p className="border-b-2 border-b-neutral-800 pb-10 text-center
              px-7
              md:mx-20
              lg:mx-32
              xl:mx-96 xl:text-lg

              a
            ">{item.descripcion}</p>
          </>
        ) )}




        {/* <h2 className="text-2xl text-center font-bold mt-20 mb-1">Misión</h2>
        <p className="px-7 border-b-2 border-b-neutral-800 pb-10">Nuestra misión es ayudar a emprendedores y negocios a dar el salto digital, creando páginas web profesionales, modernas y efectivas que impulsen su crecimiento, aumenten su visibilidad y generen más oportunidades. Nos enfocamos en soluciones accesibles, personalizadas y con soporte real, para que nuestros clientes se enfoquen en lo que mejor saben hacer: su negocio.</p>

        <h2 className="text-2xl text-center font-bold mt-10 mb-1">¿Quiénes Somos?</h2>
        <p className="px-7 border-b-2 border-b-neutral-800 pb-10">Somos un estudio digital enfocado en el desarrollo web personalizado, creado por apasionados del diseño, la programación y el emprendimiento. Entendemos las necesidades reales de los negocios locales y brindamos un servicio cercano, claro y eficiente. No vendemos solo sitios web: ofrecemos presencia digital con propósito.</p>

        <h2 className="text-2xl text-center font-bold mt-10 mb-1">Lo Que Nos Diferencia</h2>
        <ul  className="px-14 list-disc">
          <li>Trato personalizado y directo: cada proyecto es único, y cada cliente es importante</li>
          <li>Diseños modernos, optimizados y adaptables: tu web se verá increíble en computadora y celular</li>
          <li>Precios claros, sin complicaciones: sabés exactamente lo que estás pagando y lo que recibís</li>
          <li>Soporte real y seguimiento post-lanzamiento: no te dejamos solo después de publicar</li>
          <li>Todo en un solo lugar: dominio, hosting, diseño, base de datos, email y mantenimiento, sin dolores de cabeza</li>
        </ul> */}
      </div>

      <div
        className="
          mt-15
        "
      >
        <Form />
      </div>
    </div>
  )
}
