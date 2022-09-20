import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import "./quienesSomos.css"

export class SobreNosotros extends Component {
  render() {
    return (
      <div id="cuerpo">
        {/* Sobre nosotros */}
        <h1 id="titulo1">¿Quiénes somos?</h1>
        <h2 id="cuerpo2">
          Somos un restaurante de comida italiana, con más de 20 años de experiencia en el sector.
          Nuestro objetivo es ofrecer a nuestros clientes una experiencia gastronómica única,
          con productos de primera calidad y un servicio de atención al cliente de primera.
        </h2>

        <div className='row center' style={{ marginTop:'50px'}} >
          <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '70%' }} />
          <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '80%' }} />
          <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '70%' }} />
        </div>

        <h2 id = "titulo2">
          ¿Nos acompañas a conocernos?
        </h2>

        <h3 id="cuerpo2">
          Relájate y disfruta de nuestra cocina, en un ambiente acogedor y familiar, en el que podrás comprobar nuestros maravillosos platos de pasta y pizza. 
        </h3>

        {/* Video */}
        <div id="video" className=''>
          <ReactPlayer
            url='https://youtu.be/jjloL1COohY'
            // Autoplay
            loop
            // Ajustamos el volumen
            volume={0.05}
            // Para no darle al play
            playing
            // Ajustamos el video al centro de la pantalla
            style={{ margin: 'auto' }}
          />
        </div>
      </div>

    )
  }
}

export default SobreNosotros

