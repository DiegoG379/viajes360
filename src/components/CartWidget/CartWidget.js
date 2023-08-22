import Cart from './assets/Cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className='color-item-carrito d-flex justify-content-center align-items-center'>
            <img className='carrito-logo' src={Cart} alt="carritoCompras"></img>
            3
        </div>
    )
}

export default CartWidget