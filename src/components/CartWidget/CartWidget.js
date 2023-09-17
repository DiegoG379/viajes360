import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../../assets/images/Cart.svg'
import './CartWidget.css'


const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className='color-item-carrito d-flex justify-content-center align-items-center text-decoration-none'>
            <img className='carrito-logo' src={Cart} alt="carritoCompras"/>
            <p>{ getTotalQuantity() }</p>
        </Link>
    )
}

export default CartWidget