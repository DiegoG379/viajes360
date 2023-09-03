import { Link } from 'react-router-dom';
import ArgentinaFotoInicio from './assets/ArgentinaFotoInicio.webp';
import EgiptoFotoInicio from './assets/EgiptoFotoInicio.webp';
import TurquiaFotoInicio from './assets/TurquiaFotoInicio.webp';
import './MainPhotosTours.css';

const MainPhotosTours = () => {
    return(
            <div className='container-fluid d-flex justify-content-center row' style={{ margin: '0' }}>
                <h2 className='fotos-titulo-inicio d-flex flex-column justify-content-center align-items-center'>Ofertas!!</h2>
                <Link to={`/tours/cataratas`} className='col-10'>
                    <img src={ArgentinaFotoInicio} alt='Argentina Cataratas' className='estilos-imagenes-inicio' />
                </Link>
                <Link to={`/tours/turquía`} className='col-10'>
                    <img src={TurquiaFotoInicio} alt='Turquía Capadocia' className='estilos-imagenes-inicio' />
                </Link>
                <Link to={`/tours/egipto`} className='col-10'>
                    <img src={EgiptoFotoInicio} alt='Egipto Piramides' className='estilos-imagenes-inicio' />
                </Link>
            </div>
    )
}

export default MainPhotosTours