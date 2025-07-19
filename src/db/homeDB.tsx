import { FaCode } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { MdOutlineUpdate } from "react-icons/md";

export const servicios = [
  {
    icon: <HiOutlinePaintBrush size={"full"} />,
    titulo: "Diseño y Desarrollo Web",
    descripcion:
      "Creamos sitios web modernos y funcionales, adaptados a las necesidades de tu negocio. Nos enfocamos en ofrecer un diseño atractivo, responsivo y optimizado para brindar la mejor experiencia de usuario",
  },
  {
    icon: <FaCode size={"full"} />,
    titulo: "Desarrollo frontend / backend",
    descripcion:
      "Desarrollamos interfaces intuitivas y dinámicas en el frontend, junto con sistemas robustos y eficientes en el backend. Utilizamos tecnologías avanzadas para garantizar un rendimiento óptimo y una experiencia fluida",
  },
  {
    icon: <GoDatabase size={"full"} />,
    titulo: "Integraciones con bases de datos",
    descripcion:
      "Conectamos tu sitio o aplicación con bases de datos seguras y escalables, optimizando la gestión de la información. Implementamos soluciones que garantizan rapidez, fiabilidad y acceso eficiente a los dato",
  },
  {
    icon: <MdOutlineUpdate size={"full"} />,
    titulo: "Mantenimiento Web",
    descripcion:
      "Actualizamos tus contenidos, optimizamos velocidad y nos aseguramos que tu sitio siga funcionando perfecto",
  },
];

export const planes = [
  {
    titulo: "Plan Básico",
    descripcion:
      "Ideal para emprendedores que necesitan presencia rápida y sencilla en línea",
    incluye: [
      "1 página (tipo landing)",
      "Secciones personalizables",
      "Diseño personalizado",
      "Responsive completo",
      "Botón de WhatsApp o enlace directo",
      "Hosting gratuito 1 año",
      "Optimización ligera de carga",
    ],
    opcional: [
      "Formulario de contacto funcional",
      "Cambios después de entrega",
    ],
    color: "text-[#3AF900]",
  },

  {
    titulo: "Plan Estándar",
    descripcion:
      "Para negocios que necesitan más secciones e identidad de marca",
    incluye: [
      "Sitio multipágina",
      "Diseño personalizado con paleta de colores y tipografía",
      "Páginas como: Inicio, Servicios, Nosotros, Contacto, entre otros",
      "Responsive completo",
      "Formulario de contacto funcional",
      "Mapa de ubicación (opcional)",
      "Hosting gratuito 1 año",
      "Optimización de velocidad"
    ],
    opcional: [
      "Implementación de bases de datos"
    ],
    color: "text-[#0051E6]",
  },

  {
    titulo: "Plan Premium",
    descripcion:
      "Para marcas o negocios que necesitan una tienda online o un sitio complejo y a medida.",
    incluye: [
      "Sitio multipágina avanzado",
      "Funciones",
      "Opción de login, registro, dashboard simple (opcional)",
      "Panel de administración",
      "Diseño completamente personalizado y profesional",
      "SEO",
      "Animaciones",
      "Hosting + dominio",
      "Manual en PDF para el cliente"
    ],
    opcional: [
      "Panel de control más avanzado",
      "Blog o sección de noticias de bases de datos",
    ],
    color: "text-[#EE0000]",
  },
];
