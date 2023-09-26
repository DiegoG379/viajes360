import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import LoadingPage from '../../pages/LoadingPage/LoadingPage'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig.js'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProductos(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    return(
        <div>
            {loading ? (
                <LoadingPage/>
            ) : (
            <div>
                <ItemDetail {...productos}/>
            </div>
            )}
        </div>
    )
}

export default ItemDetailContainer