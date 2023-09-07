import { useState, useEffect } from 'react'
import { obtenerProductos, getProductByCategory } from '../../asyncMock.js'
import { NavLink, useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.js'
import './ItemListContainer.css'

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
                <p className="contenedor-pagina-tours-parrafo">Filtra por continente:</p>
                <NavLink to={'/tours/category/africa'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>África</NavLink>
                <NavLink to={'/tours/category/america-del-norte'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>América del Norte</NavLink>
                <NavLink to={'/tours/category/america-del-sur'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>América del Sur</NavLink>
                <NavLink to={'/tours/category/asia'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>Asia</NavLink>
                <NavLink to={'/tours/category/europa'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>Europa</NavLink>
                <NavLink to={'/tours/category/oceania'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>Oceanía</NavLink>
                <NavLink to={'/tours'} end className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>Todos</NavLink>
            </div>
        <h1 className='tours-titulo'>Nuestros Tours</h1>
        <p className='tours-parrafo'>En Viajes360, creemos que cada viaje es una oportunidad para explorar y descubrir. Desde impresionantes paisajes hasta culturas fascinantes, nuestro objetivo es llevarte a aventuras únicas. Ya sea relajándote en playas, explorando ciudades o embarcándote en expediciones, estamos aquí para hacer realidad tus sueños de viaje. Tu próxima aventura comienza aquí.</p>
        <ItemList productos={productos}/>
    </div>
    )
}

export default ItemListContainer