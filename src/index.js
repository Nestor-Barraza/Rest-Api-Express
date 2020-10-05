const express = require('express');
const morgan = require('morgan');
const app = express();
const colors = require('colors');
const sequelize = require('../database/database')
require('./asociations')
var multer = require('multer');
var upload = multer();

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(upload.array()); 
app.use(morgan('dev'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/monitor'));
app.use(require('./routes/monitorias'));

//listen Rest-API
app.listen(app.get('port'), () =>{
 console.log('Welcome to the matrix'.cyan, app.get('port'));

//connect to database
sequelize.sync({force: false}).then(() => {
    console.log('Estamos en la base de datos con el puerto'.cyan, app.get('port'));
}).catch(error => {
    console.log('se ha producido un error', error);
})
});

