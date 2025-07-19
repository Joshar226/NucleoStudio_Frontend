type ServicioCardProps = {
    servicio: {
    titulo: string;
    img: string;
    descripcion: string;
}
}

export default function ServicioCard({servicio} : ServicioCardProps) {
  return (
    <div key={servicio.titulo} className="flex flex-col flex-1/4 gap-2.5 relative cursor-pointer items-center text-center text-white
      text-xs
      md:text-base
      C_premium-servicio
    ">
        <img
          className="
            w-12 
            md:w-16
            lg:w-20
          "
          src={`/premium/${servicio.img}.webp`}
          alt={servicio.titulo}
        />
        <p className="lg:text-xl">{servicio.titulo}</p>
        <p className="absolute bg-[#00403A] rounded-xl z-10 bottom-[120%] 
          w-40 p-2.5
          md:w-44
          lg:p-3.5 lg:w-56
          C_premium-servicio-descripcion 
        ">
        {servicio.descripcion}
        </p>
    </div>
  )
}
