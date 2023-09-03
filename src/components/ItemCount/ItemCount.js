import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({disponibilidad, inicial, onAdd}) => {
    const [cantidad, definirCantidad] = useState(inicial)
    
    const incrementar = () => {
        if (cantidad < disponibilidad)  {
            definirCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if (cantidad > 0)  {
            definirCantidad(cantidad - 1)
        }
    }
    
    return(
        <div className='contenedor-contador' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button className='boton-contador' onClick={decrementar}>-</button>
            <h4>{cantidad}</h4>
            <button className='boton-contador' onClick={incrementar}>+</button>
            <button className='boton-carrito-contador' onClick={() => onAdd(cantidad)} disabled={!disponibilidad}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount