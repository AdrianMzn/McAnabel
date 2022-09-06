import React, { Component } from 'react'

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
            <div>Crear tu pedido</div>
        )
    }

    componentDidMount(){
        console.log("Paso 3. El componente se ha montado");
    
        
        var request = new XMLHttpRequest();

        // Pillamos los datos de las pizzas del JSON
        request.open('GET', this.state.rutaPizzas + "pizzas");
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
              console.log("------------PIZZAS------------");
              console.log('Status:', this.status);
              console.log('Headers:', this.getAllResponseHeaders());
              console.log('Body:', this.responseText);
            }
        };
        request.send();

        // Pillamos los datos de las pastas del JSON
        request.open('GET', this.state.rutaPizzas + "pastas");
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
              console.log("------------PASTAS------------");
              console.log('Status:', this.status);
              console.log('Headers:', this.getAllResponseHeaders());
              console.log('Body:', this.responseText);
            }
        };
        request.send();

        // Pillamos los datos de las vinos del JSON
        request.open('GET', this.state.rutaPizzas + "vinos");
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
              console.log("------------VINOS------------");
              console.log('Status:', this.status);
              console.log('Headers:', this.getAllResponseHeaders());
              console.log('Body:', this.responseText);
            }
        };
        request.send();

        // Pillamos los datos de las bebidas del JSON
        request.open('GET', this.state.rutaPizzas + "bebidas");
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
              console.log("------------BEBIDAS------------");
              console.log('Status:', this.status);
              console.log('Headers:', this.getAllResponseHeaders());
              console.log('Body:', this.responseText);
            }
        };
        request.send();

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