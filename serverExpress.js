const express = require('express');
const app = express();
const port = process.env.PORT || 4040;

//app.use(express.urlencoded());
app.use(express.json());

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/imgs', express.static('imgs'));
app.use(express.static('ProyectoEcomerce'));


app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.post('/registro', function (req, res) {
    res.send(`Bienvenido ${req.body.user}`);
});

app.listen(port, function () {
    console.log(`Ya esta funcionando el servidor en el puerto ${port}`);
});