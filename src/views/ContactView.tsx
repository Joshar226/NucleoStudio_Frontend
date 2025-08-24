import { Helmet } from "react-helmet";
import Form from "../components/Form";

export default function ContactView() {
  return (
    <>
      <Helmet>
        <title>Contacto - Nucleo Studio</title>
        <meta name="description" content="Contáctanos para servicios de diseño web con Nucleo Studio. Potenciá tu negocio en línea"/>
        <link rel="canonical" href="https://www.nucleostudiocr.com/contact" />
      </Helmet>

      <h1 className="C_titulo-seccion
        mt-10 px-5
        md:mt-15
      ">Contáctanos y creamos tu página web</h1>

      <section 
        className="
          mt-15
          md:px-20
          lg:mt-20
        ">
        <Form />
      </section>
    </>
  )
}
