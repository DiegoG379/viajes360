import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePageItems from './components/HomePageItems/HomePageItems';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePageItems/>
      <Footer/>
    </div>
  );
}

export default App;
