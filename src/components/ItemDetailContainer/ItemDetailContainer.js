import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [productos, definirProductos] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                definirProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])
    return(
        <div>
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer