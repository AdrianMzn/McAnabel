import React, { Component } from 'react'
import "./CreaPedido.css"

export class CreaPedido extends Component {

    
    constructor(){
        super(); //siempre llama a super para no interferir con el ciclo de vida

        console.log("Paso 1. Constructor: Inicializamos los datos del estado");
        this.state = {
            pizzas: [],
            pastas: [],
            vinos: [],
            bebidas: [],
            rutaRestaurante: "http://localhost:3000/",
            rutaPedido: "https://private-anon-daf4fe63f9-pizzaapp.apiary-mock.com/orders/"
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>PRODUCTOS</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pizzas.map( (pizza) => {
                                return ( 
                                    <tr key={pizza.nombre}>
                                        <td>{pizza.nombre}</td>
                                        <td>Pizza</td>
                                    </tr>
                                )
                            })}
                            {this.state.bebidas.map( (bebida) => {
                                return ( 
                                    <tr key={bebida.nombre}>
                                        <td>{bebida.nombre}</td>
                                        <td>Bebida</td>
                                    </tr>
                                )
                            })}
                            {this.state.vinos.map( (vino) => {
                                return ( 
                                    <tr key={vino.nombre}>
                                        <td>{vino.nombre}</td>
                                        <td>Vino</td>
                                    </tr>
                                )
                            })}
                            {this.state.pastas.map( (pasta) => {
                                return ( 
                                    <tr key={pasta.nombre}>
                                        <td>{pasta.nombre}</td>
                                        <td>Pasta</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    
                </div>

                <div className="container center">

                    <div className="row fila">
                        <div className="col-md-6">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnS4K5ReDNjSZsm64uQQ9v8AzZtCqssTc2SA&usqp=CAU' alt="aa" />
                        </div>
                        <div className="col-md-6">
                            <img src="https://images.aws.nestle.recipes/resized/1828b2ea10adc8c9f710fcf959a55a51_PASTA-AL-ROMERO-Lunch_1200_600.png" alt="Pastas" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bebidas-verano-portada-elle-1658494280.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" alt="Bebidas" />
                        </div>
                        <div className="col-md-6">
                            <img src="https://images.hola.com/imagenes/cocina/escuela/200907079224/temperatura/vinos/enologia/0-876-296/temperatura-adobe-t.jpg?tx=w_568" alt="Vinos" />
                        </div>
                    </div>

                    <div className="row">
                        Promociones
                    </div>
                </div>
            </div>
        )
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

    realizarPedido(){

        var request = new XMLHttpRequest();

        request.open('POST', 'https://private-anon-daf4fe63f9-pizzaapp.apiary-mock.com/orders/');

        request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
        }
        };

        var body = "{ \
        'cart': [ \
            { \
            'menuItemId': 2, \
            'quantity': 1 \
            }, \
            { \
            'menuItemId': 3, \
            'quantity': 1 \
            }, \
            { \
            'menuItemId': 6, \
            'quantity': 2 \
            } \
        ], \
        'restuarantId': 1 \
        }";

        request.send(body);
    }



}

export default CreaPedido