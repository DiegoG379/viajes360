import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import './Cart.css'


const Cart = () => {
    const { cart, clearCart, getTotalQuantity, getTotalCost } = useContext(CartContext)

    if (getTotalQuantity() === 0){
        return(
            <div className='contenedor-pagina-carrito text-center'>
                <h2 className='no-items-pagina-carrito'>No hay tours en el carrito</h2>
                <Link className='text-decoration-none ir-tours-pagina-carrito' to='/tours/'>Ir a Tours</Link>
            </div>
        )
    }

    return(
        <div className='contenedor-pagina-carrito'>
            {cart.map(p => <CartItem key={p.id}{...p}/>)}
            <h3 className='precio-pagina-carrito'>Total a pagar: <span style={{ color: '#003355', fontWeight: 'bold' }}>USD {getTotalCost()}</span></h3>
            <div className='d-flex justify-content-center align-items-center text-center'>
                <button className='boton-pagina-carrito' onClick={() => clearCart()}>Limpiar carrito</button>
                <Link className='boton-pagina-carrito' to='/tours/'>Agregar otro Tour</Link>
                <Link className='boton-pagina-carrito' to='/checkout/'>Realizar pago</Link>
            </div>
        </div>
    )
}

export default Cart