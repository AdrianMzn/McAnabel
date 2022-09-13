import React, { Component } from 'react'
import "./CreaPedido.css"
import imgReturn from'../images/imgReturn.jpg';
import CarritoActual from './CarritoActual';


export class CreaPedido extends Component {

    
    constructor(){
        super(); //siempre llama a super para no interferir con el ciclo de vida

        console.log("Paso 1. Constructor: Inicializamos los datos del estado");
        this.state = {
            pizzas: [],
            pastas: [],
            vinos: [],
            bebidas: [],
            productos: [],
            actualState: "menu",

            rutaRestaurante: "http://localhost:3000/",
        }

        this.carritoActual = React.createRef();
    }

    addProductoCarrito(event, producto){
        event.preventDefault();
        this.carritoActual.current.addProducto(producto);
        this.setState( {carritoActual: this.state.carritoActual} );
    }
    
    render() {
        return (
            <div>
                <br /><br />
                
            <div className="row">
            <h1 >Crea tu propio menú</h1>

                <div className="container col-xs-8 col-md-8 col-lg-8 center ">

                    { (this.state.actualState === "menu" ) &&
                    <div>
                        <div className="row">
                            <div className="col-xs-12 col-md-12 col-lg-6 divMenu">
                                    <img className="imagenMenu" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnS4K5ReDNjSZsm64uQQ9v8AzZtCqssTc2SA&usqp=CAU' 
                                        onClick={ (e) => {this.mostrarProductos(e, this.state.pizzas); this.setState( {actualState: "productos" })}} alt="Pizzas" />
                            </div>
                            <div className="col-xs-12 col-md-12 col-lg-6 divMenu">
                                <img className="imagenMenu" src="https://images.aws.nestle.recipes/resized/1828b2ea10adc8c9f710fcf959a55a51_PASTA-AL-ROMERO-Lunch_1200_600.png" 
                                        onClick={ (e) => {this.mostrarProductos(e, this.state.pastas); this.setState( {actualState: "productos" })}} alt="Pastas" />
                            </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-xs-12 col-md-12 col-lg-6 divMenu">
                                <img className="imagenMenu" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bebidas-verano-portada-elle-1658494280.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" 
                                        onClick={ (e) => {this.mostrarProductos(e, this.state.bebidas); this.setState( {actualState: "productos" })}} alt="Bebidas" />
                            </div>
                            <div className="col-xs-12 col-md-12 col-lg-6 divMenu">
                                <img className="imagenMenu" src="https://images.hola.com/imagenes/cocina/escuela/200907079224/temperatura/vinos/enologia/0-876-296/temperatura-adobe-t.jpg?tx=w_568" 
                                        onClick={ (e) => {this.mostrarProductos(e, this.state.vinos); this.setState( {actualState: "productos" })}} alt="Vinos" />
                            </div>
                        </div>
                    </div>}

                    { (this.state.actualState !== "menu" ) &&
                    <div className="divProductos">
                        <div className="row center">
                                {
                                    <div className="col-xs-4 col-md-4 col-lg-4 producto">
                                        <img className="imagenProducto" src={imgReturn} alt="imgReturn no encontrada"
                                                onClick={ (e) => {this.mostrarProductos(e, []); this.setState( {actualState: "menu" })}} /><br />
                                                Volver al menu
                                    </div>
                                }
                                {this.state.productos.map((producto, index) => {
                                    return(
                                        <div className="col-xs-4 col-md-4 col-lg-4 producto" key={index} 
                                                    onClick={ (e) => this.addProductoCarrito(e,producto) }>              
                                            <img className="imagenProducto" src={producto.imagen} alt="producto.imagen no encontrada"></img><br />
                                            {producto.nombre} - {producto.precio} €
                                        </div>
                                )
                                })}
                        </div>
                    </div> }
                </div>

                <div className="container col-xs-4 col-md-4 col-lg-4 ">
                    <CarritoActual ref={this.carritoActual} />
                </div>
            </div>
            </div>
        )
    }

    mostrarProductos(event, newProductos){
        event.preventDefault();
        this.setState( {productos: newProductos} );
        console.log(this.state.productos);
    }

    llamarAPI = async(URL) => {
        const respuesta = await fetch (URL);
        const data = await respuesta.json();
        return data;
    }

    async componentDidMount(){
        console.log("Paso 3. El componente se ha montado");
    
        //Pedimos las pizzas
        let pizzasNew = await this.llamarAPI(this.state.rutaRestaurante + "pizzas");
        this.setState({
            pizzas: pizzasNew
        })

        let pastasNew = await this.llamarAPI(this.state.rutaRestaurante + "pastas");
        this.setState({
            pastas: pastasNew
        })

        let vinosNew = await this.llamarAPI(this.state.rutaRestaurante + "vinos");
        this.setState({
            vinos: vinosNew
        })

        let bebidasNew = await this.llamarAPI(this.state.rutaRestaurante + "bebidas");
        this.setState({
            bebidas: bebidasNew
        })

    }

}

export default CreaPedido