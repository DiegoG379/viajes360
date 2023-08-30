import './Item.css';

const Item = ({id, nombre, precio, imagen, disponibilidad}) => {
    return(
        <article className='tarjeta-item-tour'>
            <header>
                <h2 className='tarjeta-item-tour-titulo'>{nombre}</h2>
            </header>
            <picture>
                <img className='tarjeta-item-tour-imagen' src={imagen} alt='florianopolis'></img>
            </picture>
            <section className='tarjeta-item-tour-texto'>
                <p>USD <span className='tarjeta-item-tour-span'>{precio}</span></p>
                <p>Lugares disponibles: {disponibilidad}</p>
            </section>
            <button className='tarjeta-item-tour-boton'>
                Ver más
            </button>
        </article>
    )
}

export default Item