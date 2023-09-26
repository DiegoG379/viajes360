import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../../assets/images/Cart.svg'
import './CartWidget.css'


const CartWidget = () => {
    const { getTotalQuantityCart } = useContext(CartContext)

    return(
        <Link to='/cart' className='color-item-carrito d-flex justify-content-center align-items-center text-decoration-none'>
            <img className='carrito-logo' src={Cart} alt="carritoCompras"/>
            <p>{ getTotalQuantityCart() }</p>
        </Link>
    )
}

export default CartWidget