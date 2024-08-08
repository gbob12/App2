
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

import Contact from './pages/contact';
import About from './pages/About';
import  Home from './pages/home';
import Products from './pages/product';
import background from '../Pictures/timthumb2.jpg';
import Services from './pages/services';








function App() {
  return (

      <div className="App">
          <Router>

                  <Navbar/>

                      <Routes>
                          <Route  path="/" element={<Home/>}/>
                          <Route path="/services" element ={<Services/>}/>
                          <Route path="/products" element={<Products/>}/>
                          <Route path="/contact"  element={<Contact/>}/>
                          <Route path="/about" element={<About/>}/>

                      </Routes>

                      <Footer/>
          </Router>

      </div>

);
}


export default App;
