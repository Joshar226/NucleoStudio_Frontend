import { Helmet } from "react-helmet";

export default function PrivacyPolicyView() {
  return (
    <>
      <Helmet>
        <title>Políticas de Privacidad - Nucleo Studio</title>
        <meta name="description" content="Conoce nustras políticas de privaciad"/>
        <link rel="canonical" href="https://www.nucleostudiocr.com/privacy-policy" />
      </Helmet>
      <h1 className="C_titulo-seccion">Políticas de Privacidad</h1>

      <div className="mx-auto
        w-[250px] 
        md:w-[500px]
        xl:w-[700px]
      ">
        <p>En Nucleo Studio, respetamos tu privacidad y nos comprometemos a proteger los datos personales que nos proporcionás a través de nuestro sitio web.</p>

        <ol className="list-decimal">
          <li className="text-xl font-bold mt-6">¿Qué datos recopilamos?</li>
          <p>Al completar nuestro formulario de contacto, podemos solicitarte información como: Nombre, Número de teléfono, Correo electrónico, y Mensaje. Estos datos son necesarios para poder responder a tus consultas y ofrecerte una mejor atención.</p>

          <li className="text-xl font-bold mt-6">¿Cómo usamos tus datos?</li>
          <p>Utilizamos tu información únicamente para: Comunicarnos con vos en relación a tu solicitud o consulta, brindarte información sobre nuestros servicios, si así lo solicitás, nunca compartimos, vendemos ni alquilamos tu información a terceros.</p>

          <li className="text-xl font-bold mt-6">Seguridad de la información</li>
          <p>Implementamos medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdida o divulgación.</p>

          <li className="text-xl font-bold mt-6">Derechos del usuario</li>
          <p>En cualquier momento podés solicitar acceso a los datos que tenemos sobre vos, corrección o eliminación de tus datos.</p>

          <li className="text-xl font-bold mt-6">Cambios en esta política</li>
          <p>Esta política puede actualizarse ocasionalmente. Cualquier cambio será publicado en esta misma sección.</p>

          
        </ol>
      </div>
    </>

    
  )
}