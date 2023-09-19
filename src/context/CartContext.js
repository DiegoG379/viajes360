import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    const addItem = (item, cantidad) => {
        if (!isInCart(item.id)){
            setCart(prev => [...prev, {...item, cantidad}])
        } else {
            Swal.fire({
                title: 'ATENCIÓN',
                text: 'El tour seleccionado ya se encuentra en el carrito',
                icon: 'info',
                buttonsStyling: false,
                confirmButtonText: 'Aceptar',
                customClass: {
                    popup: 'my-custom-alert-popup',
                    confirmButton: 'my-custom-confirm-button'
                }
            })
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0;
    
        for (const item of cart) {
            totalQuantity += item.cantidad
    
            totalQuantity += item.cantidadAgregadaOpcional1
            totalQuantity += item.cantidadAgregadaOpcional2
            totalQuantity += item.cantidadAgregadaOpcional3
        }
    
        return totalQuantity;
    };

    const getTotalCost = () => {
        let totalCost = 0;
    
        for (const item of cart) {
            const costoProductoPrincipal = item.precio * item.cantidad

            const costoOpcionales = (
                item.cantidadAgregadaOpcional1 * item.preciOpcionalUno +
                item.cantidadAgregadaOpcional2 * item.preciOpcionalDos +
                item.cantidadAgregadaOpcional3 * item.preciOpcionalTres
            );
    
            totalCost += costoProductoPrincipal + costoOpcionales
        }
    
        return totalCost
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, getTotalQuantity, getTotalCost}}>
            {children}
        </CartContext.Provider>
    )
}