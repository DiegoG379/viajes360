import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './layout/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ContactPageItems from './pages/ContactPageItems/ContactPageItems'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Footer from './layout/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/tours/' element={<ItemListContainer titulo={'Nuestros Tours'}/>}/>
            <Route path='/tours/category/:categoryId' element={<ItemListContainer titulo={'Nuestros Tours'}/>}/>
            <Route path='/tours/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/contacto' element={<ContactPageItems/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App
