import './ItemListContainer.css';

const ItemListContainer = ({ subtitulo, parrafoUno, parrafoDos, parrafoTres}) => {
    return(
        <div className='contenedor-articulo-inicio d-flex flex-column justify-content-center align-items-center'>
            <h2 className='articulo-titulo-inicio mb-3'>{subtitulo}</h2>
            <p className='w-100 articulo-parrafo-inicio'>{parrafoUno}</p>
            <p className='w-100 articulo-parrafo-inicio'>{parrafoDos}</p>
            <p className='w-100 articulo-parrafo-inicio'>{parrafoTres}</p>
        </div>
    )
}

export default ItemListContainer