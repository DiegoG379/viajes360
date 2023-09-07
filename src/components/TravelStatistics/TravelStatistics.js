import './TravelStatistics.css'

const TravelStatistics = () => {
    return(
        <div className='container-fluid row d-flex justify-content-center contenedor-estadisticas-inicio' style={{ margin: '0' }}>
            <div className='col-12 d-flex justify-content-center'>
                <h3 className='estadisticas-titulo-inicio'>Estadísticas</h3>
            </div>
            <div className='col-6 d-flex justify-content-center estadisticas-datos-inicio'>
                <p><i className="estadisticas-iconos-inicio fas fa-users"></i> Pasajeros: <strong>13.793</strong></p>
            </div>
            <div className='col-6 d-flex justify-content-center estadisticas-datos-inicio'>
                <p><i className="estadisticas-iconos-inicio fa-solid fa-suitcase-rolling"></i> Tours vendidos: <strong>729</strong></p>
            </div>
            <div className='col-6 d-flex justify-content-center estadisticas-datos-inicio'>
                <p><i className="estadisticas-iconos-inicio fa-solid fa-earth-americas"></i> Países visitados: <strong>79</strong></p>
            </div>
            <div className='col-6 d-flex justify-content-center estadisticas-datos-inicio'>
                <p><i className="estadisticas-iconos-inicio fas fa-star"></i> Puntuación: <strong>4.7</strong></p>
            </div>
        </div>
    )
}

export default TravelStatistics