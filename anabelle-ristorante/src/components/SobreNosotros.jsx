import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import "./quienesSomos.css"

export class SobreNosotros extends Component {
  render() {
    return (
      <div id = "cuerpo">
        {/* Sobre nosotros */}
          <h1 id = "titulo1">¿Quiénes somos?</h1>
          <h2 id = "titulo2">
            Somos un restaurante de comida italiana, con más de 20 años de experiencia en el sector.
            Nuestro objetivo es ofrecer a nuestros clientes una experiencia gastronómica única,
            con productos de primera calidad y un servicio de atención al cliente de primera.
          </h2>

          {/* Video */}
          <div id = "video">
            <ReactPlayer
              url = 'https://youtu.be/jjloL1COohY'
              // Autoplay
              loop
              // Ajustamos el volumen
              volume={0.3}
              // Para no darle al play
              playing
              // Ajustamos el video al centro de la pantalla
              style={{margin: 'auto'}}
            />
          </div>
      </div>

    )
  }
}

export default SobreNosotros

