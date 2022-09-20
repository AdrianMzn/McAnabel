import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export class Navbar extends Component {

  
  render() {
    const logo = {
    fontFamily: " Droid serif, serif",
     fontSize: "30px",
     color: "#fac564",
     fontStyle: 'Italic'
  }
  const fondo = {
    backgroundColor:"#121618"
  }
    return (
      <div  >
          <nav className="navbar  navbar-expand-lg navbar-dark  p-4" style={fondo}>
            <Link className="navbar-brand titulo-logo" to="/" style={logo }>Anabelle Ristorante</Link>
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