import './CheckoutPage.css'

const CheckoutPage = ({orden, nombre}) => {
    return(
        <div className='contenedor-pagina-compra'>
            <h1 className='titulo-pagina-compra'>¡Gracias por tu compra!</h1>
            <div className='contenedor-texto-pagina-compra'>
                <p className='texto-pagina-compra'>Hola <span className='span-pagina-compra'>{nombre.toUpperCase()}</span>,</p>
                <p className='texto-pagina-compra'>¡Gracias por confiar en nosotros para tu próximo viaje! Tu reserva ha sido confirmada con éxito.</p>
                <p className='texto-pagina-compra'>Número de Reserva: <span className='span-pagina-compra'>{orden}</span>.</p>
                <p className='texto-pagina-compra'>Estamos emocionados de ser parte de tu aventura. Ante cualquier pregunta o inquietud, no dudes en ponerte en contacto con nosotros.</p>
                <br/>
                <p className='texto-pagina-compra'>¡Esperamos que tengas un viaje increíble!</p>
                <p className='texto-pagina-compra'>Saludos cordiales,<br/> Viajes360.</p>
            </div>
        </div>
    )
}

export default CheckoutPage