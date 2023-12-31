import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/images/logo360.png'
import CartWidget from '../../components/CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='navbar barra-navegacion navbar-expand-lg container-fluid row fondo-barra-navegacion' style={{ margin: '0' }}>
            <div className='col-2'>
                <Link to='/'><img src={logo} alt="logo" style={{ width: '150px', height: 'auto' }}></img></Link>
            </div>
            <div className='col-4' style={{ textAlign: 'left' }}>
            <Link to='/' style={{ textDecoration: 'none' }}><h1 className='barra-navegacion-titulo'>
                <span style={{ color: '#00BBE3' }}>Viajes</span>
                <span style={{ color: '#003355' }}>360</span>
            </h1></Link>
            </div>
            <div className='col-5'>
                <ul className="nav container-fluid row justify-content-center" style={{ margin: '0' }}>
                    <li className="nav-item col-3 barra-navegacion-enlaces">
                        <NavLink to='/' className={({isActive}) => `nav-link barra-navegacion-enlaces-texto ${isActive ? 'active' : ''} `}>Inicio</NavLink>
                    </li>
                    <li className="nav-item col-3 barra-navegacion-enlaces">
                        <NavLink to="/tours" className={({isActive}) => `nav-link barra-navegacion-enlaces-texto ${isActive ? 'active' : ''} `}>Tours</NavLink>
                    </li>
                    <li className="nav-item col-3 barra-navegacion-enlaces">
                    <NavLink to={`/contacto`} className={({isActive}) => `nav-link barra-navegacion-enlaces-texto ${isActive ? 'active' : ''} `}>Contacto</NavLink>
                    </li>
                </ul>
            </div>
            <div className='col-1'>
                <CartWidget/>
            </div>        
        </nav>
    )
}

export default NavBar