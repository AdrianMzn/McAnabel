import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import CreaPedido from './components/CreaPedido';
import Contacto from './components/Contacto';
import SobreNosotros from './components/SobreNosotros';
import ScrollToTop from "react-scroll-to-top";
import Footer from './components/Footer';


function App() {
  return (
    <Router>
        <div>
            <ScrollToTop smooth color="#000" />

            <Navbar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/creaPedido" element={<CreaPedido />} />
              <Route exact path="/contacto" element={<Contacto />} />
              <Route exact path="/sobreNosotros" element={<SobreNosotros />} />
              <Route path="*" element={<Error />} />
            </Routes>

            <Footer />
            
        </div>
      
    </Router>
  );
}

export default App;
