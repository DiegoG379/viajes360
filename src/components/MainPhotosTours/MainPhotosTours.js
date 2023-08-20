import ArgentinaFotoInicio from './assets/ArgentinaFotoInicio.jpg';
import EgiptoFotoInicio from './assets/EgiptoFotoInicio.jpg';
import TurquiaFotoInicio from './assets/TurquiaFotoInicio.jpg';
import './MainPhotosTours.css';

const MainPhotosTours = () => {
    return(
            <div className='container-fluid d-flex justify-content-center row' style={{ margin: '0' }}>
                <a href='/' className='col-10'>
                    <img src={ArgentinaFotoInicio} alt='Argentina Cataratas' className='estilos-imagenes-inicio' />
                </a>
                <a href='/' className='col-10'>
                    <img src={EgiptoFotoInicio} alt='Egipto Piramides' className='estilos-imagenes-inicio' />
                </a>
                <a href='/' className='col-10'>
                    <img src={TurquiaFotoInicio} alt='Turquía Capadocia' className='estilos-imagenes-inicio' />
                </a>
            </div>
    )
}

export default MainPhotosTours