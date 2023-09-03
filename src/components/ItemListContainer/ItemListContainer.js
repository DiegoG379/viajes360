import { useState, useEffect } from 'react';
import { obtenerProductos, getProductByCategory } from '../../asyncMock.js';
import ItemList from '../ItemList/ItemList.js';
import { NavLink, useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [productos, definirProductos] = useState([])

    const {categoryId} = useParams([])

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : obtenerProductos
        
        asyncFunction(categoryId)
        .then(response => {
            definirProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

    return(
        <div className='contenedor-pagina-tours'>
            <div className="contenedor-pagina-tours-links d-flex justify-content-center align-items-center">
                <NavLink to={'/tours/africa'} className="contenedor-pagina-tours-categorias nav-link">África</NavLink>
                <NavLink to={'/tours/america-del-norte'} className="contenedor-pagina-tours-categorias nav-link">América del Norte</NavLink>
                <NavLink to={'/tours/america-del-sur'} className="contenedor-pagina-tours-categorias nav-link">América del Sur</NavLink>
                <NavLink to={'/tours/asia'} className="contenedor-pagina-tours-categorias nav-link">Asia</NavLink>
                <NavLink to={'/tours/europa'} className="contenedor-pagina-tours-categorias nav-link">Europa</NavLink>
                <NavLink to={'/tours/oceania'} className="contenedor-pagina-tours-categorias nav-link">Oceanía</NavLink>
                <NavLink to={'/tours'} className="contenedor-pagina-tours-categorias nav-link">Todos</NavLink>
            </div>
        <h1 className='tours-titulo'>Nuestros Tours</h1>
        <p className='tours-parrafo'>En Viajes360, creemos que cada viaje es una oportunidad para explorar y descubrir. Desde impresionantes paisajes hasta culturas fascinantes, nuestro objetivo es llevarte a aventuras únicas. Ya sea relajándote en playas, explorando ciudades o embarcándote en expediciones, estamos aquí para hacer realidad tus sueños de viaje. Tu próxima aventura comienza aquí.</p>
        <ItemList productos={productos}/>
    </div>
    )
}

export default ItemListContainer