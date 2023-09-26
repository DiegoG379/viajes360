import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.js'
import './ItemListContainer.css'
import LoadingPage from '../../pages/LoadingPage/LoadingPage.js'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig.js'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'items'), where('categoryId', '==', categoryId))
        :collection(db, 'items')
        
        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProductos(productsAdapted)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    return(
        <div>
            {loading ? (
                <LoadingPage/>
            ) : (
            <div className='contenedor-pagina-tours'>
                <div className="contenedor-pagina-tours-links d-flex justify-content-center align-items-center">
                    <p className="contenedor-pagina-tours-parrafo">Filtra por continente:</p>
                    <NavLink to={'/tours/category/africa'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>África</NavLink>
                    <NavLink to={'/tours/category/america-del-norte'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>América del Norte</NavLink>
                    <NavLink to={'/tours/category/america-del-sur'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>América del Sur</NavLink>
                    <NavLink to={'/tours/category/asia'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>Asia</NavLink>
                    <NavLink to={'/tours/category/europa'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>Europa</NavLink>
                    <NavLink to={'/tours/category/oceania'} className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>Oceanía</NavLink>
                    <NavLink to={'/tours'} end className={({isActive}) => `contenedor-pagina-tours-categorias nav-link ${isActive ? 'active' : ''} `}>Todos</NavLink>
                </div>
            <h1 className='tours-titulo'>Nuestros Tours</h1>
            <p className='tours-parrafo'>En Viajes360, creemos que cada viaje es una oportunidad para explorar y descubrir. Desde impresionantes paisajes hasta culturas fascinantes, nuestro objetivo es llevarte a aventuras únicas. Ya sea relajándote en playas, explorando ciudades o embarcándote en expediciones, estamos aquí para hacer realidad tus sueños de viaje. Tu próxima aventura comienza aquí.</p>
            <ItemList productos={productos}/>
            </div>
            )}
        </div>
    )
}

export default ItemListContainer