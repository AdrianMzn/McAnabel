import React, { Component } from 'react'
import "./CreaPedido.css"
//rce
export class carritoActual extends Component {

  constructor(){
    super();

    this.state = {
      productos: [],
      cantidad: [],
      rutaPedido: "https://private-anon-daf4fe63f9-pizzaapp.apiary-mock.com/orders/"
    }
  }

  render() {
    return (
      <div>
          <div className="carrito">
              <h1>Menú actual</h1>
              {this.state.productos.map((producto, index) => {
                  if( this.state.cantidad[index] > 0)
                  return(
                        
                        <div className="productoCarrito" key={index}>

                              <img className="imagenCarrito" src={producto.imagen} alt="producto.imagen no encontrada"></img>
                              {producto.nombre} - {producto.precio} € - {this.state.cantidad[index]} unds
                              <button className="botonAumentarCantidad" onClick={ (e) => { this.setCantidad(e,index,1) } }>+</button>
                              <button className="botonDisminuirCantidad" onClick={ (e) => { this.setCantidad(e,index,-1) } }>-</button>
                                    
                        </ div>
                  )
                  return(<div></div>)
              })}    
              { (this.state.productos.length > 0) && 
                      <div className="center precioTotal"> <br></br>Coste total: {this.getPrecioTotal()} €</div>   
              }     
          </div>

          <div className="envio">
                <h1>Información de envio</h1>
          </div>
      </div>
    )
  }

  getPrecioTotal(){
      let total = 0;

      for (let index = 0; index < this.state.cantidad.length; index++) {
        total += this.state.cantidad[index] * this.state.productos[index].precio;
      }
      return total.toFixed(2);
  }

  setCantidad(event, index, cantidad){

    event.preventDefault();
    let cantidadNew = this.state.cantidad;

    if(cantidadNew[index] + cantidad <= 0){
      console.log("Eliminamos")
      cantidadNew.splice(index, 1);

      let productosNew = this.state.productos.filter(item => item.nombre !== this.state.productos[index].nombre);
      this.setState( 
        { productos: productosNew }
      );

    }
    else{
      cantidadNew[index]+=cantidad;
    }

    this.setState( 
      { cantidad: cantidadNew }
    );
  }

  addProducto(producto){
    let index = this.state.productos.indexOf(producto);
    if(index > -1){
      let cantidadNew = this.state.cantidad;
      cantidadNew[index]+=1;
      this.setState( 
        { cantidad: cantidadNew }
      );
    }
    else{

      this.state.productos.push(producto);

      let cantidadNew = this.state.cantidad;
      cantidadNew[cantidadNew.length] = 1;
      this.setState( 
        { cantidad: cantidadNew }
      );
    }

    
  }
}

export default carritoActual