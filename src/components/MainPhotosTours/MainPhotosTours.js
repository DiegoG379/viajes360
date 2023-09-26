import { Link } from 'react-router-dom'
import ArgentinaFotoInicio from '../../assets/images/homePhotos/ArgentinaFotoInicio.webp'
import EgiptoFotoInicio from '../../assets/images/homePhotos/EgiptoFotoInicio.webp'
import TurquiaFotoInicio from '../../assets/images/homePhotos/TurquiaFotoInicio.webp'
import './MainPhotosTours.css'

const MainPhotosTours = () => {
    return(
            <div className='container-fluid d-flex justify-content-center row' style={{ margin: '0' }}>
                <h2 className='fotos-titulo-inicio d-flex flex-column justify-content-center align-items-center'>Ofertas!!</h2>
                <Link to={`/tours/item/GdJbgSLOgGhIdn6BuBh0`} className='col-10'>
                    <img src={ArgentinaFotoInicio} alt='Argentina Cataratas' className='estilos-imagenes-inicio' />
                </Link>
                <Link to={`/tours/item/3cLtKbVQLYor7PNl1IgS`} className='col-10'>
                    <img src={TurquiaFotoInicio} alt='Turquía Capadocia' className='estilos-imagenes-inicio' />
                </Link>
                <Link to={`/tours/item/oO2zEV3rqDkFpNKAuc2t`} className='col-10'>
                    <img src={EgiptoFotoInicio} alt='Egipto Piramides' className='estilos-imagenes-inicio' />
                </Link>
            </div>
    )
}

export default MainPhotosTours