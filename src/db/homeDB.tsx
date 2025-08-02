import { BiWorld } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { GoDatabase, GoTrophy } from "react-icons/go";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { MdOutlineUpdate } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";

export const servicios = [
  {
    icon: <HiOutlinePaintBrush className="w-full h-full" />,
    titulo: "Diseño y Desarrollo Web",
    descripcion:
      "Creamos sitios web modernos y funcionales, adaptados a las necesidades de tu negocio.",
  },
  {
    icon: <FaCode className="w-full h-full" />,
    titulo: "Desarrollo frontend / backend",
    descripcion:
      "Desarrollamos interfaces intuitivas y dinámicas en el frontend, junto con sistemas robustos y eficientes en el backend.",
  },
  {
    icon: <GoDatabase className="w-full h-full" />,
    titulo: "Integraciones con bases de datos",
    descripcion:
      "Conectamos tu sitio o aplicación con bases de datos seguras y escalables, optimizando la gestión de la información.",
  },
  {
    icon: <MdOutlineUpdate className="w-full h-full" />,
    titulo: "Mantenimiento Web",
    descripcion:
      "Actualizamos tus contenidos, optimizamos velocidad y nos aseguramos que tu sitio siga funcionando perfecto.",
  },
];

export const ventajas = [
  {
    titulo: 'Presencia las 24/7',
    icon: <BiWorld className="w-full h-full"/>,
    descripcion: 'Tu negocio estará disponible en todo momento, incluso cuando estás durmiendo. Los clientes pueden ver tu catálogo, agendar citas o contactarte en cualquier momento'
  },
  {
    titulo: 'Confianza y credibilidad',
    icon: <LuChartNoAxesCombined className="w-full h-full"/>,
    descripcion: 'Una página profesional genera confianza en tus clientes y te posiciona como un negocio serio y establecido'
  },
  {
    titulo: 'Más ventas, más oportunidades',
    icon: <IoCartOutline className="w-full h-full"/>,
    descripcion: 'Con una web bien diseñada puedes aumentar tus ventas, captar nuevos clientes y mostrar productos o servicios de forma atractiva'
  },
  {
    titulo: 'Contacto directo y profesional',
    icon: <FiMessageSquare  className="w-full h-full"/>,
    descripcion: 'Un formulario, botón de WhatsApp o correo personalizado hacen que tus clientes se comuniquen fácil y rápido con vos'
  },
  {
    titulo: 'Ventaja frente a la competencia',
    icon: <GoTrophy className="w-full h-full"/>,
    descripcion: 'Si tu competencia no tiene página web, ya vas un paso adelante. Y si la tiene, una mejor web te puede destacar'
  },
]

export const nosotros = [
  {
    titulo: 'Misión',
    descripcion: 'Nuestra misión es ayudar a emprendedores y negocios a dar el salto digital, creando páginas web profesionales, modernas y efectivas que impulsen su crecimiento, aumenten su visibilidad y generen más oportunidades. Nos enfocamos en soluciones accesibles, personalizadas y con soporte real, para que nuestros clientes se enfoquen en lo que mejor saben hacer: su negocio.'
  },
  {
    titulo: '¿Quiénes Somos?',
    descripcion: 'Somos un estudio digital enfocado en el desarrollo web personalizado, creado por apasionados del diseño, la programación y el emprendimiento. Entendemos las necesidades reales de los negocios locales y brindamos un servicio cercano, claro y eficiente. No vendemos solo sitios web: ofrecemos presencia digital con propósito.'
  },
  {
    titulo: 'Lo que nos diferencia',
    descripcion: 'En Núcleo Studio nos destacamos por ofrecer un servicio personalizado, claro y completo. Acompañamos a cada cliente desde el primer contacto hasta después de publicar su sitio, brindando soporte real y soluciones a la medida. Nuestras páginas web son modernas, rápidas y adaptables a cualquier dispositivo. Además, te facilitamos todo lo que necesitás en un solo lugar: dominio, hosting, diseño, base de datos, correo profesional y mantenimiento continuo, sin complicaciones ni costos ocultos.'
  }
]
