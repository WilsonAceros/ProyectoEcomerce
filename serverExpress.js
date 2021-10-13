const express = require('express');
const app = express();
const port = 4040;

//Responder con Hola mndo cuando se realiza una solicitud GET a la Pagina de Inicio
app.get('/',function(req,res){
    res.send('Hola Mundo Express');
});

app.listen(port, function(){
    console.log('Ya esta funcionando el servidor puerto ${port}');
});