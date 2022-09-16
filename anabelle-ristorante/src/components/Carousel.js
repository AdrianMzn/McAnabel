import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import pizza1 from '../images/bg_1.png';
import pizza2 from '../images/bg_2.png';
import './Home.css'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item className="active slider-item background-madera2">
      <div className="container ">
            <div className="row slider-text align-items-center"  data-scrollax-parent="true">

            <div className="col-md-7 col-sm-12  ftco-animate">
                <span className="subheading ">Welcome</span>
                <h2 className="mb-4 ">COCINA ITALIANA</h2>
                <h4 className="mb-4 mb-md-5 ">Nuestro pequeño restaurante se encuentra a orillas del río Ebro.</h4>
            </div>
            <div className="col-md-5 col-sm-12  ftco-animate">
                <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-pedido">
                <Link to="/creaPedido" className='color-black'>Hacer pedido</Link>
                </button>
                <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-contacto">
                <Link to="./contacto" className='color-black'>Contáctanos</Link>
                </button>
            </div>
            </div>
        </div>


        
      </Carousel.Item>
      <Carousel.Item>
      <div className="container">
            <div className="row slider-text align-items-center" data-scrollax-parent="true">
            <div className="col-md-6 col-sm-12 ftco-animate">
                <span className="subheading">Delicious</span>
                <h1 className="mb-4">Pizza Italiana</h1>
                <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-pedido">
                <Link to="/creaPedido" className='color-black'>Hacer pedido</Link>
                </button>
                <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-contacto">
                <Link to="./contacto" className='color-black' >Contáctanos</Link>
                </button>
            </div>
            <div className="col-md-6 ftco-animate">
                <img src={pizza1} className="img-fluid" alt="" />
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="container">
            <div className="row slider-text align-items-center " data-scrollax-parent="true">
            <div className="col-md-6 ftco-animate">
                <img src={pizza2} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6 col-sm-12  ftco-animate">
                <span className="subheading">Peperoni</span>
                <h1 className="mb-4">Pizza Italiana</h1>
                <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-pedido">
                <Link to="/creaPedido" className='color-black'>Hacer pedido</Link>
                </button>
                <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-contacto">
                <Link to="./contacto" className='color-black'>Contáctanos</Link>
                </button>
            </div>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;