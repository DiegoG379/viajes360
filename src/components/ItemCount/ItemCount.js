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
        <div>
            <div>
                <button onClick={decrementar}>-</button>
                <h4>{cantidad}</h4>
                <button onClick={incrementar}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(cantidad)} disabled={!disponibilidad}>Agregar al carrito</button>
            </div>
        </div>
    )
};

export default ItemCount