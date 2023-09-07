import './PageNotFound.css'

const PageNotFound = () => {
    return(
        <div className='contenedor-pagina-inexistente container-fluid d-flex justify-content-center align-items-center'>
            <div className='col-12 text-center'>
                <h1 className='titulo-pagina-inexistente'>
                    <span style={{ color: '#003355' }}>404</span>
                    <span style={{ color: '#00BBE3' }}>  NOT FOUND</span>
                </h1>
                <p className='parrafo-pagina-inexistente'>La página que estás buscando no existe.</p>
            </div>
        </div>
    )    
}

export default PageNotFound