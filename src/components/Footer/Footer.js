import logo from '../LogoViajes360/logo360.png';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer className='estilos-footer'>
            <div className='estilos-footer-superior container-fluid row' style={{ margin: '0' }}>
                <div className='col-4 d-flex justify-content-center align-items-center'>
                    <a className='redes-iconos-footer' href="https://github.com/DiegoG379" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className='redes-iconos-footer' href="https://linkedin.com/in/diego-garcía-muniz" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div className='col-4 d-flex justify-content-center align-items-center'>
                    <Link to='/'><img src={logo} alt="logo" style={{ width: '93px', height: 'auto' }}></img></Link>
                </div>
                <div className='col-4 d-flex justify-content-end align-items-center'>
                    <div className='direccion-footer text-nowrap vertical-text' style={{ margin: '0', padding: '0' }}>
                        <p className='mb-0 direccion-parrafo-footer'>Av. El Cairo esq. Stone Town 379</p>
                        <p className='mb-0 direccion-parrafo-footer'>Montevideo, Uruguay</p>
                        <p className='mb-0 direccion-parrafo-footer'>+598 98 874 8242</p>
                        <p className='mb-0 direccion-parrafo-footer'>contacto@viajes360.com.uy</p>                    
                    </div>
                </div>
            </div> 
            <div className='estilos-footer-inferior d-flex justify-content-center align-items-center'>
                Diego García © 2023. Todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer