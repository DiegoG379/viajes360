import ArgentinaFotoInicio from './assets/ArgentinaFotoInicio.png';
import EgiptoFotoInicio from './assets/EgiptoFotoInicio.png';
import TurquiaFotoInicio from './assets/TurquiaFotoInicio.png';
import './MainPhotosTours.css';

const MainPhotosTours = () => {
    return(
            <div className='container-fluid d-flex justify-content-center row' style={{ margin: '0' }}>
                <h2 className='fotos-titulo-inicio d-flex flex-column justify-content-center align-items-center'>Ofertas!!</h2>
                <a href='/' className='col-10'>
                    <img src={ArgentinaFotoInicio} alt='Argentina Cataratas' className='estilos-imagenes-inicio' />
                </a>
                <a href='/' className='col-10'>
                    <img src={TurquiaFotoInicio} alt='Turquía Capadocia' className='estilos-imagenes-inicio' />
                </a>
                <a href='/' className='col-10'>
                    <img src={EgiptoFotoInicio} alt='Egipto Piramides' className='estilos-imagenes-inicio' />
                </a>
            </div>
    )
}

export default MainPhotosTours