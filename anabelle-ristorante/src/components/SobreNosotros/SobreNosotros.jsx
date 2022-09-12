import './SobreNosotros.css'
import React, { Component } from 'react'


export class SobreNosotros extends Component {
  render() {
    return (
          <div className="bodySobreNosotros">

            <main className="mainSobreNosotros">
                <h1>¿Quiénes somos?</h1>
                <h2 className='h2SobreNosotros'>
                    Somos un restaurante de comida italiana, con más de 20 años de experiencia en el sector. 
                    Nuestro objetivo es ofrecer a nuestros clientes una experiencia gastronómica única, 
                    con productos de primera calidad y un servicio de atención al cliente de primera.
                </h2> 
            </main>
          </div>
    )
  }
}

export default SobreNosotros