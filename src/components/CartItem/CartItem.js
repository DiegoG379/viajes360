import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import './CartItem.css'

const CartItem = ({id, nombre, cantidad, precio, opcionalUno, opcionalDos, opcionalTres, cantidadAgregadaOpcional1, preciOpcionalUno, cantidadAgregadaOpcional2, preciOpcionalDos, cantidadAgregadaOpcional3, preciOpcionalTres}) => {
  const { removeItem } = useContext(CartContext)
  
  const calcularPrecioOpcionales = () => {
    let precioTotalOpcionales = 0

    if (cantidadAgregadaOpcional1 > 0) {
      precioTotalOpcionales += cantidadAgregadaOpcional1 * preciOpcionalUno
    }

    if (cantidadAgregadaOpcional2 > 0) {
      precioTotalOpcionales += cantidadAgregadaOpcional2 * preciOpcionalDos
    }

    if (cantidadAgregadaOpcional3 > 0) {
      precioTotalOpcionales += cantidadAgregadaOpcional3 * preciOpcionalTres
    }

    return precioTotalOpcionales
  }

  const precioTotalTourConOpcionales = precio * cantidad + calcularPrecioOpcionales();

  return (
    <div className='contenedor-tours-carrito'>
      <div className='row d-flex align-items-center justify-content-center text-center'>
        <div className='col-12 text-center'>
          <h4 className='titulo-items-pagina-carrito'>{nombre}</h4>
        </div>
        <div className='col-3'>
          <p className='detalle-items-pagina-carrito'>Cantidad de personas: <span style={{ color: '#003355', fontWeight: 'bold' }}>{cantidad}</span></p>
          <p className='detalle-items-pagina-carrito'>Tour seleccionado: {cantidad} x <span style={{ color: '#003355', fontWeight: 'bold' }}>USD {precio}</span></p>
          <p className='detalle-items-pagina-carrito'>Total: <span style={{ color: '#003355', fontWeight: 'bold' }}>USD  {cantidad * precio}</span></p>
        </div>
        <div className='col-4'>
          {cantidadAgregadaOpcional1 > 0 && (
            <p className='detalle-items-pagina-carrito'>{opcionalUno} - {cantidadAgregadaOpcional1} x <span style={{ color: '#003355', fontWeight: 'bold' }}>USD {preciOpcionalUno}</span></p>
          )}
          {cantidadAgregadaOpcional2 > 0 && (
            <p className='detalle-items-pagina-carrito'>{opcionalDos} - {cantidadAgregadaOpcional2} x <span style={{ color: '#003355', fontWeight: 'bold' }}>USD {preciOpcionalDos}</span></p>
          )}
          {cantidadAgregadaOpcional3 > 0 && (
            <p className='detalle-items-pagina-carrito'>{opcionalTres} - {cantidadAgregadaOpcional3} x <span style={{ color: '#003355', fontWeight: 'bold' }}>USD {preciOpcionalTres}</span></p>
          )}
        </div>
        <div className='col-3'>
          {precioTotalTourConOpcionales > 0 && (
            <p className='detalle-items-pagina-carrito'>Total Tour y Opcionales: <span style={{ color: '#003355', fontWeight: 'bold' }}>USD {precioTotalTourConOpcionales}</span></p>
          )}
        </div>
        <div className='col-1'>
          <button className='boton-eliminar-pagina-carrito' onClick={() => removeItem(id)}>X</button>
        </div>
      </div>
  </div>


  )
}

export default CartItem;
