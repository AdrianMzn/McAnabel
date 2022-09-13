import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand titulo-logo" to="/">Anabelle Pizzeria</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sobreNosotros">Quienes somos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/creaPedido">Crea tu pedido</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contáctanos</Link>
                </li>
                
              </ul>
            </div>
          </nav>
      </div>
    )
  }
}

export default Navbar