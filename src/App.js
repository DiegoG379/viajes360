import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePageItems from './components/HomePageItems/HomePageItems';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<HomePageItems/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
