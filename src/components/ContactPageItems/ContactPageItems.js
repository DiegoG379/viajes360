import './ContactPageItems.css';

const ContactPageItems = () => {
    return (
        <div className='container-fluid row' style={{ margin: '0' }}>
            <h1 className='contacto-titulo col-12'>Contáctanos</h1>
            <p className='contacto-parrafo col-12' style={{ paddingLeft: '35px', paddingRight: '35px' }}>¿Preguntas, comentarios o necesitas más detalles sobre nuestras excursiones y viajes? En Viajes360, nuestra misión es ofrecerte la mejor experiencia de viaje y aventura. Estamos disponibles para ayudarte en todo momento. Puedes contactarnos a través de nuestros canales de comunicación, y nuestro equipo de expertos en viajes estará encantado de asistirte. ¡Explora el mundo con nosotros y haz de tu próxima aventura una experiencia inolvidable!</p>
            <div className='container-fluid row col-12 d-flex justify-content-around'>
                <div className='contacto-parrafo contenedor-contacto col-5'>
                    <p>Dirección: <span className='contacto-parrafo-span'>Av. El Cairo esq. Stone Town 379 - Montevideo, Uruguay</span></p>
                    <p>Teléfono: <span className='contacto-parrafo-span'>+598 98 874 8242</span></p>
                    <p>Correo Electrónico: <span className='contacto-parrafo-span'>contacto@viajes360.com.uy</span></p>  
                    <p>Horario de Atención: L. a V.: <span className='contacto-parrafo-span'>09:00-20:00, Sábados: 10:00-16:00, Domingos: Cerrado</span></p>
                </div>
                <div className='contacto-parrafo contenedor-contacto col-5 container-fluid row'>
                    <div>
                        <input className='camposEntrada col-9' type="text" id="nombre" placeholder="Escribe tu Nombre" />
                    </div>
                    <div>
                        <input className='col-9 camposEntrada' type="text" id="nombre" placeholder="Escribe tu Email" />
                    </div>
                    <div>
                        <textarea className='col-9 camposEntrada' id="mensaje" placeholder="Escribe tu mensaje" />
                    </div>
                    <div>
                        <button className='botonContacto col-3'>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPageItems