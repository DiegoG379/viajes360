import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, precio, imagen, disponibilidad, categoria}) => {
    return(
        <article className='tarjeta-item-tour'>
            <header>
                <h2 className='tarjeta-item-tour-titulo'>{nombre}</h2>
            </header>
            <picture>
                <img className='tarjeta-item-tour-imagen' src={imagen} alt='FotosDePortada'></img>
            </picture>
            <section className='tarjeta-item-tour-texto'>
                <p>USD <span className='tarjeta-item-tour-span'>{precio}</span></p>
                <p>Lugares disponibles: {disponibilidad}</p>
            </section>
            <Link to={`/tours/item/${id}`} className='tarjeta-item-tour-boton'>
                Ver más
            </Link>
        </article>
    )
}

export default Item