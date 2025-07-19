type CasoCardProps = {
    caso: {
      nombre: string;
      caso: string;
    }
}

export default function CasoCard({caso} : CasoCardProps) {
  return (
    <div key={caso.nombre} className="
      text-xs
      md:text-base
    ">
        <p className="text-white">{caso.nombre}</p>
        <p className="text-[#c5c5c5]">{caso.caso}</p>
    </div>
  )
}
