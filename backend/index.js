const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors());
//Cargamos el modulo de direccionamiento de rutas

app.use('/api/investigador', require('./routes/Investigador.js'));
app.use('/api/institucion', require('./routes/Institucion.js'));
//setting
app.set('port', process.env.PORT || 4000);
//starting the server
app.listen(app.get('port'), () => {
console.log(`Server started on port`, app.get('port'));
});
