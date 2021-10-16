// const express = require('express');
// const app = express();
// const port = 4040;

// app.use(express.urlencoded());
// app.use(express.json());

// //Responder con Hola mndo cuando se realiza una solicitud GET a la Pagina de Inicio
// app.post('/registro',function(req,res){
//     res.send('Bienvenido Sr. ${req.body.user}');
// });

// app.listen(port, function(){
//     console.log('Ya esta funcionando el servidor puerto ${port}');
// });

const express = require('express');
const app = express();
const port = 4040;
app.use(express.urlencoded());
app.use(express.json());
app.get('/', function (req, res) {
    res.send(`Bienvenido a Api Rest Express JS`);
});
app.post('/registro', function (req, res) {
    res.send(`Bienvenido ${req.body.user}`);
});
app.listen(port, function () {
    console.log(`Ya esta funcionando el servidor en el puerto ${port}`);
});