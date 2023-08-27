import HomeArticle from '../HomeArticle/HomeArticle';
import MainPhotosTours from '../MainPhotosTours/MainPhotosTours';
import TravelStatistics from '../TravelStatistics/TravelStatistics';
import './HomePageItems.css';

const HomePageItems = () => {
    return(
        <main className='container-fluid row d-flex justify-content-center' style={{ margin: '0' }}>
            <div className='col-6 contenedor-imagenes-pagina-inicio'>
                <MainPhotosTours/>
            </div>
            <article className='col-6'>
                <HomeArticle subtitulo={'Nosotros'} parrafoUno={'En Viajes360, llevamos más de dos décadas conectando a los apasionados por los viajes con los destinos más asombrosos del planeta. Fundada en Uruguay, nuestra empresa se enorgullece de ser un referente en la industria turística, brindando experiencias únicas a miles de viajeros.'} parrafoDos={'Ofrecemos una amplia gama de emocionantes destinos en todos los continentes. Desde las maravillas culturales de Europa hasta los paisajes exóticos de África, pasando por las fascinantes experiencias que ofrece América Latina, te brindamos la oportunidad de explorar el mundo a tu manera. Nuestros expertos en viajes están listos para ayudarte a planificar la aventura perfecta, teniendo en cuenta tus preferencias y deseos.'} parrafoTres={'En Viajes360, también compartimos una profunda responsabilidad con el medio ambiente y las comunidades locales que visitamos. Trabajamos de cerca con proveedores comprometidos con la sostenibilidad y promovemos prácticas éticas en todos nuestros viajes. Al viajar con nosotros, no solo experimentarás la belleza del mundo, sino que también contribuirás a su preservación.'}/>
                <TravelStatistics/>
            </article>          
        </main>
    )
}

export default HomePageItems