import Cart from './assets/Cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className='color-item-carrito'>
            <img className='carrito-logo' src={Cart} alt="carritoCompras"></img>
            3
        </div>
    )
}

export default CartWidget