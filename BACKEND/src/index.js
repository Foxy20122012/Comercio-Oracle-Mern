const express = require ('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


const home = require('../routes/home.routes.js');
const empleados = require('../routes/empleados.routes.js');
const productos = require('../routes/productos.routes.js');

/*Configuraciones */

app.set('port',4000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(empleados);
app.use(home);
app.use(productos);

app.listen(app.get('port'),()=>{
    console.log('Server status 200 on port 4000');
});

