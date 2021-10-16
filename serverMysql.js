const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 4040;

//app.use(express.urlencoded());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nrc53465'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Conexion a la base datos exitosa');
})


app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/imgs', express.static('imgs'));
// app.use(express.static('ProyectoEcomerce'));
// app.use("/static", express.static("ProyectoEcomerce"));

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.get('/marcas', function (req, res) {
    res.sendFile('marcas.html', {
        root: __dirname
    });
});

app.get('/login', function (req, res) {
    res.sendFile('login.html', {
        root: __dirname
    });
});

app.get('/contacto', function (req, res) {
    res.sendFile('contacto.html', {
        root: __dirname
    });
});

app.get('/catalogohombres', function (req, res) {
    res.sendFile('catalogo1.html', {
        root: __dirname
    });
});

app.get('/catalogomujeres', function (req, res) {
    res.sendFile('catalogo2.html', {
        root: __dirname
    });
});


// Creamos los Middelware para el CRUD
// Leer
//MySQL CRUD endpoint
// Read
app.get('/contactos', (req, res) => {
    const sql = 'SELECT * FROM contactos';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Sin resultados');
        }
    });
});

//READ
app.get('/contactos/:id', (req, res) => {
    const {
        id
    } = req.params;
    const sql = `SELECT * FROM contactos WHERE id = ${id}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Sin resultados');
        }
    });
});

// CREATE
app.post('/add', (req, res) => {
    const sql = `INSERT INTO contactos SET ?`;
    const datos = {
        nombre: req.body.nombre,
        email: req.body.correo,
        telefono: req.body.telefono,
        mensaje: req.body.mensaje,
    };
    connection.query(sql, datos, (error, results) => {
        if (error) throw error;
        res.send('Registro creado');
    });
});


// UPDATE
app.put('/act/:id', (req, res) => {
    const {
        id
    } = req.params;
    const {
        nombre,
        telefono
    } = req.body;
    const sql = `UPDATE contactos SET nombre = '${nombre}', telefono = '${telefono}' WHERE id=${id}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        res.send('Registro actualizado');
    });
});


// DELETE
app.delete('/delete/:id', (req, res) => {
    const {
        id
    } = req.params;
    const sql = `DELETE FROM contactos WHERE id = ${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Registro eliminado');
    });
});


// app.post('/registro', function (req, res) {
//     res.send(`Bienvenido ${req.body.user}`);
// });

app.listen(port, function () {
    console.log(`Ya esta funcionando el servidor en el puerto ${port}`);
});