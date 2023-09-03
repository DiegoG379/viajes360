import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePageItems from './components/HomePageItems/HomePageItems';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ContactPageItems from './components/ContactPageItems/ContactPageItems';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<HomePageItems/>}/>
            <Route path='/tours' element={<ItemListContainer titulo={'Nuestros Tours'}/>}/>
            <Route path='/tours/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/contacto' element={<ContactPageItems/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
