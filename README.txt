Resumen de la aplicacion web:

"Se trata de una aplicación web propiedad de un restaurante de comidas de todo tipo que permite 
a los clientes de este restaurante la entrega de su comida a domicilio"


Método para desplegar:

      1) Primero deben instalarse las dependencias desde una terminal, para ello nos situamos dentro del 
         directorio "anabelle-ristorante" y ejecutamos el siguiente comando:
                    
                    npm i
      
      2) Despues nos situamos en la carpeta raiz deeste repositorio y vamos a lanzar el servidor que contiene 
         los productos contenidos en el catalogo del restaurante:
          
                    json-server --watch productos.json     
                    
      3) Por ultimo nos volvemos a colocar en la carpeta "anabelle-ristorante" y lanzamos la aplicacion web:
      
                    npm start
              
              
