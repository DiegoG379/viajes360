import './ItemListContainer.css';

const ItemListContainer = () => {
    return(
        <article className='container-fluid row d-flex justify-content-center' style={{ margin: '0' }}>
            <div className='col-6'>
            
            </div>
            <div className='col-6'>
                <div className='contenedor-articulo-inicio d-flex flex-column justify-content-center align-items-center'>
                    <h2 className='articulo-titulo-inicio mb-3'>Nosotros</h2>
                    <p className='w-100 articulo-parrafo-inicio'>En Viajes360, llevamos más de dos décadas conectando a los apasionados por los viajes con los destinos más asombrosos del planeta. Fundada en Uruguay, nuestra empresa se enorgullece de ser un referente en la industria turística, brindando experiencias únicas a miles de viajeros.</p>
                    <p className='w-100 articulo-parrafo-inicio'>Ofrecemos una amplia gama de emocionantes destinos en todos los continentes. Desde las maravillas culturales de Europa hasta los paisajes exóticos de África, te brindamos la oportunidad de explorar el mundo a tu manera. Nuestros expertos en viajes están listos para ayudarte a planificar la aventura perfecta, teniendo en cuenta tus preferencias y deseos.</p>
                    <p className='w-100 articulo-parrafo-inicio'>En Viajes360, también compartimos una profunda responsabilidad con el medio ambiente y las comunidades locales que visitamos. Trabajamos de cerca con proveedores comprometidos con la sostenibilidad y promovemos prácticas éticas en todos nuestros viajes. Al viajar con nosotros, no solo experimentarás la belleza del mundo, sino que también contribuirás a su preservación.</p>
                </div>
            </div>          
        </article>
    )
}

export default ItemListContainer