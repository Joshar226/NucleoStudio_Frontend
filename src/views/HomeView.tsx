import { Link } from 'react-router-dom'

export default function HomeView() {
  return (
    <>
        <Link to={'/pagina-basica'}>Basica</Link>
        <Link to={'/pagina-estandar'}>Estandar</Link>
        <Link to={'/pagina-premium'}>Premium</Link>
    </>
  )
}
