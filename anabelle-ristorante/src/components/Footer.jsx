import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export class Footer extends Component {

  
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
      <div  className='footer'>
        <div style={fondo}>
        <p className='nombre'>
          Anabelle Ristorante
          </p>
          <p className='copyright'>
          Copyright © 2022 · All Rights Reserved
          </p>
          <p className='policy'>
          Legal Warning Cookies Policy Privacy Policy Quality Policy
          </p>
        </div>
      </div>
    )
  }
}

export default Footer