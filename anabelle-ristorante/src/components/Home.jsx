import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import pizza1 from '../images/bg_1.png';
import pizza2 from '../images/bg_2.png';

import './Home.css'

export class Home extends Component {
  render() {
    const fondo = {
      backgroundColor:"#121618"
    }
    return (
      <div>

        <section id="carouselExampleFade" className="home-slider carouselExampleFade owl-carousel ">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">

            <div className="carousel-inner ">
              <div className="carousel-item active slider-item background-madera2 " >
                
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
              </div>
              <div className="carousel-item  slider-item background-madera ">
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
              </div>

              <div className="carousel-item  slider-item background-madera">
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
              </div>
                

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section >
          <div className='row'>
            <div className='social col-md-4'>
              <h3>Social media</h3>
            </div>
            <div className='contacto col-md-8' style={fondo}>
              <div className='row' >
                <div className='col-md-4 text'>
                  <h6>Paseo de Echegaray 21</h6>
                  <p>Zaragoza 50002</p>
                </div>
                <div className='col-md-4 text'>
                  <h6>956 56 22 20</h6>
                  <p>Tenemos Parking</p>
                </div>
                <div className='col-md-4 text'>
                  <h6>Abrimos Martes-Domingos</h6>
                  <p>13:00 - 23:00</p>
                </div>
              </div>

            </div>
          </div>
        </section>


      </div>
    )
  }
}

export default Home