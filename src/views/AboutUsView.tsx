import { Helmet } from "react-helmet";
import Form from "../components/Form";
import { nosotros } from "../db/homeDB";

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
