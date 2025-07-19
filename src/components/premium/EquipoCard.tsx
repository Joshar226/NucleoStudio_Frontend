type EquipoCardProps = {
    miembro: {
        nombre: string;
        img: string;
        area: string;
    }   
}

export default function EquipoCard({miembro} : EquipoCardProps) {
  return (
    <div key={miembro.nombre} className="flex flex-col items-center text-center gap-1
      text-sm
      md:text-base
      lg:text-xl
    ">
        <img
          className=" rounded-full
            w-20
            md:w-44
            lg:w-48
          "
          src={`/premium/${miembro.img}.avif`}
          alt={`Trabajador de ${miembro.area}`}
        />
        <p>{miembro.nombre}</p>
        <p>{miembro.area}</p>
    </div>
  )
}
