import { useEffect, useState } from 'react';
import { obtenerProductos } from '../../asyncMock.js';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js'

const ItemListContainer = ({titulo}) => {
    const [productos, definirProductos] = useState([])

    useEffect(() => {
        obtenerProductos()
        .then(response => {
            definirProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className='contenedor-pagina-tours'>
            <h1 className='tours-titulo'>{titulo}</h1>
            <p className='tours-parrafo'>En Viajes360, creemos que cada viaje es una oportunidad para explorar y descubrir. Desde impresionantes paisajes hasta culturas fascinantes, nuestro objetivo es llevarte a aventuras únicas. Ya sea relajándote en playas, explorando ciudades o embarcándote en expediciones, estamos aquí para hacer realidad tus sueños de viaje. Tu próxima aventura comienza aquí.</p>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer