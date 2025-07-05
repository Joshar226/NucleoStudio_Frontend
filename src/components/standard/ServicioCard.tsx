
type ServicioCardProps = {
    servicio: {
        titulo: string;
        img: string;
    }
}

export default function ServicioCard({servicio} : ServicioCardProps) {

  return (
    <div className="standard-servicio-card">
        <div className="standard-servicio-card-img">
            <img src={`/standard/${servicio.img}.webp`} alt={servicio.titulo} />
            <div className="standard-servicio-card-opaco"></div>
        </div>

        

        <div className="standard-servicio-card-texto">
            <h3>{servicio.titulo}</h3>
            <p>Ver más</p>
        </div>
    </div>
  )
}
