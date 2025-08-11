import { Helmet } from "react-helmet";
import Form from "../components/Form";

export default function ContactView() {
  return (
    <>
      <Helmet>
        <title>Contacto - Nucleo Studio</title>
        <meta name="description" content="Contáctanos para servicios de diseño web con Nucleo Studio. Potenciá tu negocio en línea"/>
      </Helmet>
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
