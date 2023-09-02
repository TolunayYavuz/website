import {Route,Routes} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contant from './components/Contant';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/menu' exact element={<Menu/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/contant' exact element={<Contant/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
