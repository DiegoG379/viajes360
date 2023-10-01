import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext'
import {db} from '../../services/firebase/firebaseConfig'
import { collection, documentId, getDocs, where, query, Timestamp, writeBatch, addDoc } from "firebase/firestore"
import CheckoutForm from '../../pages/CheckoutForm/CheckoutForm'
import LoadingPage from "../../pages/LoadingPage/LoadingPage"
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage"
import './Checkout.css'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [name, setName] = useState('')

    const {cart, getTotalCost, clearCart} = useContext(CartContext)
    const createOrder = async({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: getTotalCost(),
                date: Timestamp.fromDate(new Date())
            }
        
        const batch = writeBatch(db)
        const outOfStock = []
        const ids = cart.map(prod => prod.id)
        const productsRef = collection(db, 'items')
        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
        const {docs} = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.disponibilidad

            const productsAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productsAddedToCart?.cantidad

            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, {disponibilidad: stockDb - prodQuantity})
            } else {
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })

        setName(name)

        if(outOfStock.length === 0){
            await batch.commit()

            const orderRef = collection(db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()
            } else {
            console.error('HAy productos fuera de stock')
            }
        } catch (error) {
            console.error("Error al procesar la orden:", error);
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <LoadingPage/>
    }

    if(orderId) {
        return <CheckoutPage nombre={name} orden={orderId}/>
    }

    return(
        <div className='contenedor-pagina-checkout'>
            <h1 className='titulo-pagina-checkout'>Ingrese sus datos</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout