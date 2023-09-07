import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ nombre, precio, descripcion, imagen, disponibilidad, fecha, regimen, hotel, itinerario, opcionalUno, opcionalDos, opcionalTres, preciOpcionalUno, preciOpcionalDos, preciOpcionalTres, disponibilidadOpcionales }) => {
    return (
        <div className='contenedor-detalles-item'>
            <div className='container-fluid row'>
                <h1 className='col-12 detalles-item-titulo'>{nombre}</h1>
                <div className='col-12 d-flex align-items-center'>
                    <img className='col-6 detalles-item-imagen' src={imagen} alt='' />
                    <div className='col-6'>
                        <h2 className='detalles-item-opcionales-titulo'>Nuestros Opcionales</h2>
                        <p className='detalles-item-disponibilidad'>Lugares disponibles para los opcinales: {disponibilidadOpcionales}</p>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-6'>
                                <p className='detalles-item-opcionales-actividades'>{opcionalUno}, USD{preciOpcionalUno}.</p>
                            </div>
                            <div className='col-6'>
                                <ItemCount inicial={0} disponibilidad={disponibilidadOpcionales} onAdd={(cantidad) => console.log('cantidad agregada', cantidad)} />
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-6'>
                            <p className='detalles-item-opcionales-actividades'>{opcionalDos}, USD{preciOpcionalDos}.</p>
                            </div>
                            <div className='col-6'>
                                <ItemCount inicial={0} disponibilidad={disponibilidadOpcionales} onAdd={(cantidad) => console.log('cantidad agregada', cantidad)} />
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-6'>
                            <p className='detalles-item-opcionales-actividades'>{opcionalTres}, USD{preciOpcionalTres}.</p>
                            </div>
                            <div className='col-6'>
                                <ItemCount inicial={0} disponibilidad={disponibilidadOpcionales} onAdd={(cantidad) => console.log('cantidad agregada', cantidad)} />
                            </div>
                        </div>
                        <div className='row align-items-center'>
                            <div className='col-12'>
                                <table className='mx-auto detalles-item-tabla-precios'>
                                    <thead>
                                    <tr className='detalles-item-tabla-precios-encabezado'>
                                        <th className='detalles-item-tabla-precios-cuadriculas'>Hotel</th>
                                        <th className='detalles-item-tabla-precios-cuadriculas'>Regimen de Comidas</th>
                                        <th className='detalles-item-tabla-precios-cuadriculas'>Single</th>
                                        <th className='detalles-item-tabla-precios-cuadriculas'>Doble</th>
                                        <th className='detalles-item-tabla-precios-cuadriculas'>Triple</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className='detalles-item-tabla-precios-contenido'>
                                        <td className='detalles-item-tabla-precios-cuadriculas'>{hotel}</td>
                                        <td className='detalles-item-tabla-precios-cuadriculas'>{regimen}</td>
                                        <td className='detalles-item-tabla-precios-cuadriculas'>USD {parseInt(precio * 1.15)}</td>
                                        <td className='detalles-item-tabla-precios-cuadriculas'>USD {precio}</td>
                                        <td className='detalles-item-tabla-precios-cuadriculas'>USD {parseInt(precio * 0.85)}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <p className='detalles-item-disponibilidad'>Lugares disponibles para este viaje: {disponibilidad}</p>
                            <p className='detalles-item-disponibilidad'>Fecha programada para el próximo viaje: {fecha}</p>
                            <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-6'>
                            <p className='detalles-item-opcionales-actividades'>Reservá esta excursión!!</p>
                            </div>
                            <div className='col-6'>
                                <ItemCount inicial={0} disponibilidad={disponibilidad} onAdd={(cantidad) => console.log('cantidad agregada', cantidad)} />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-10 mx-auto'>
                    <h2 className='detalles-item-descripcion'>{descripcion}</h2>
                    <p className='detalles-item-itinerario'>{itinerario}</p>
                    <p className='detalles-item-letra-chica'>Paquete sujeto a disponibilidad y cambios sin previo aviso. *No valido para eventos especiales, feriados, etc.* Los hoteles informados pueden llegar a variar, se confirman al momento de la compra. *Incluye todas las tasas de embarque e impuestos *Este paquete tiene una tarifa promocional, no es acumulable con otros descuentos y promociones. *Es responsabilidad del pasajero contar con la documentación necesaria vigente y en buen estado al momento de viajar. * El operador tiene las facultades de establecer las condiciones de cancelación y/o modificación del viaje, excediendo la voluntad y responsabilidad de HiperViajes. *Algunos itinerarios pueden presentar cambios debido a condiciones meteorológicas.</p>
                </div>
            </div>
        </div>

    );
};

export default ItemDetail
