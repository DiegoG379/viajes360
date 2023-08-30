import productImage1 from './images/products/florianopolis.jpg'
import productImage2 from './images/products/ushuaia.jpg'
import productImage3 from './images/products/egipto.jpg'
import productImage4 from './images/products/paris.jpg'
import productImage5 from './images/products/dubai.jpg'
import productImage6 from './images/products/turquia.jpg'

const productos = [
    {id: '1', nombre: 'Florianopolis', precio: 449, categoria: 'América del Sur', imagen: productImage1, disponibilidad: 43, descripcion: '7 dias recorriendo Florianopolis'},
    {id: '2', nombre: 'Ushuaia', precio: 1799, categoria: 'América del Sur', imagen: productImage2, disponibilidad: 17, descripcion: '9 dias recorriendo Ushuaia'},
    {id: '3', nombre: 'Egipto', precio: 3799, categoria: 'África', imagen: productImage3, disponibilidad: 9, descripcion: '15 dias recorriendo Egipto'},
    {id: '4', nombre: 'París', precio: 2699, categoria: 'Europa', imagen: productImage4, disponibilidad: 13, descripcion: '5 dias recorriendo París'},
    {id: '5', nombre: 'Dubái', precio: 4999, categoria: 'Asia', imagen: productImage5, disponibilidad: 21, descripcion: '7 dias recorriendo Dubái'},
    {id: '5', nombre: 'Turquía', precio: 4399, categoria: 'Asia', imagen: productImage6, disponibilidad: 27, descripcion: '12 dias recorriendo Turquia'},
]

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}