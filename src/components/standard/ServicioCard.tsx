type ServicioCardProps = {
  servicio: {
    titulo: string;
    img: string;
  };
};

export default function ServicioCard({ servicio }: ServicioCardProps) {
  return (
    <div className="C_sombra">
      <div className="relative">
        <img 
            src={`/standard/${servicio.img}.avif`} 
            alt={servicio.titulo} 
            className="
              w-24
              md:w-52
              lg:w-3xs
              xl:w-80
            "    
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

        <div className="text-center 
            py-2.5
            md:py-5
        ">
        <h3 className="font-bold 
            text-xs w-24 
            md:w-52 md:text-base   
            lg:w-3xs lg:text-xl
            xl:w-80 xl:text-2xl
        ">{servicio.titulo}</h3>
        <p className="cursor-pointer hover:underline
            text-xs mt-2.5
            md:text-base
            lg:mt-5
            xl:text-xl
        ">Ver más</p>
      </div>
    </div>
  );
}
