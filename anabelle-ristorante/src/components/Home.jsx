import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import pizza1 from '../images/bg_1.png';
import pizza2 from '../images/bg_2.png';

import './Home.css'

export class Menu extends Component {
  render() {
    return (
      <div>

        <section className="home-slider carouselExampleFade owl-carousel ">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">

            <div className="carousel-inner ">
              <div className="carousel-item active slider-item background-madera2 " data-interval="500">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row slider-text align-items-center" data-scrollax-parent="true">

                    <div className="col-md-7 col-sm-12 bienvenida ftco-animate">
                      <span className="subheading bienvenida">Welcome</span>
                      <h2 className="mb-4 bienvenida">Cocina Italina</h2>
                      <p className="mb-4 mb-md-5 bienvenida">Nuestro pequeño restaurante se encuentra a orillas del río Ebro.</p>
                    </div>
                    <div>
                    <button className="btn btn-warning p-3 px-xl-4 py-xl-3 enlace">
                        <Link to="#" >Hacer pedido</Link>
                      </button>
                      <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace">
                        <Link to="#" >Contáctanos</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item  slider-item background-madera" data-interval="500">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row slider-text align-items-center" data-scrollax-parent="true">
                    <div className="col-md-6 col-sm-12 ftco-animate">
                      <span className="subheading">Delicious</span>
                      <h1 className="mb-4">Pizza Italiana</h1>
                      <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      <button className="btn btn-warning p-3 px-xl-4 py-xl-3 enlace">
                        <Link to="#" >Hacer pedido</Link>
                      </button>
                      <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace">
                        <Link to="#" >Contáctanos</Link>
                      </button>

                    </div>
                    <div className="col-md-6 ftco-animate">
                      <img src={pizza1} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item  slider-item  " data-interval="500">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row slider-text align-items-center background-madera" data-scrollax-parent="true">
                    <div className="col-md-6 ftco-animate">
                      <img src={pizza2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12  ftco-animate">
                      <span className="subheading">Peperoni</span>
                      <h1 className="mb-4">Pizza Italiana</h1>
                      <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      <button className="btn btn-warning p-3 px-xl-4 py-xl-3 enlace">
                        <Link to="#" >Hacer pedido</Link>
                      </button>
                      <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace">
                        <Link to="#" >Contáctanos</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
        <section>
          <div>

          </div>
        </section>


      </div>
    )
  }
}

export default Menu