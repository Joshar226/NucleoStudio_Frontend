import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <nav
        className="flex py-3.5 justify-around items-center
        "
      >
        <Link to={'/'}>
          <img
            src="logo.webp"
            srcSet="logo.webp 1x, logo@2x.webp 2x"
            alt="Nucleo Studio logo"
            className=" w-[114px] h-[100px]
              max-w-[80px] max-h-[68px]
              md:max-w-[100px] md:max-h-[88px]
              xl:max-w-[114px] xl:max-h-[100px]
              
            "
          />
        </Link>

        <div
          className=" text-center
            grid grid-cols-2 gap-1   text-sm
            md:flex md:text-base md:*:border-r-2 md:*:border-white md:*:pr-2.5 md:*:last:border-none md:*:last:px-0
            lg:gap-4
            xl:text-lg xl:gap-5
            
            *:transition-transform *:hover:scale-110 *:active:scale-110 *:duration-200 *:ease-in-out 
          "
        >
          <Link to={'/'}>Inicio</Link>
          <Link to={'/contact'}>Contacto</Link>
        </div>
      </nav>

      <Outlet/>

      <footer 
        className="border-t-3 border-t-[#181818]
          mt-10 py-3
          md:py-5
        "
      >
        <div className="flex
          flex-col items-center
          md:flex-row justify-around
        ">
          <Link to={'/'}> 
            <img
              src="logo.webp"
              srcSet="logo.webp 1x, logo@2x.webp 2x"
              alt="Nucleo Studio logo"
              className=" w-[114px] h-[100px]
                max-w-[80px] max-h-[68px]
                md:max-w-[100px] md:max-h-[88px]
                xl:max-w-[114px] xl:max-h-[100px]
                
              "
            />
          </Link>
          
          <div
            className="flex items-center
              flex-col gap-2 mt-2.5
              md:flex-row md:gap-7
            "  
          >
            <Link to={'about'}>Sobre Nosotros</Link> 
            <Link to={'privacy-policy'}>Politica de Privacidad</Link> 
          </div>
        </div>
        
        <p className="text-center mt-10 text-sm">&#169; {new Date().getFullYear()} Nucleo Studio. Todos los derechos reservados.</p>
      </footer>


      <a
        href="https://wa.me/50662830706"
        target="_blank"
        className="fixed bottom-5 right-5 
          transition-transform hover:scale-110 duration-300 active:scale-110
        "
      >
        <img
          src="whatsapp.webp"
          srcSet="whatsapp.webp 1x, whatsapp@2x.webp 2x"
          alt="Whatsapp"
          className="bg-[#343434] rounded-full
            w-12 h-12
            md:w-14 md:h-14
          "
        />
      </a>
    </div>
  );
}
