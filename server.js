const express = require('express')

const app = express();

const hbs = require('hbs');

require('./hbs/helpers');


app.use(express.static(  __dirname + '/public' ));
 

//EXPRESS HBS ENGINE

hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');





app.get('/', function (req, res) {  //Todas las peticiones get con el / pasaran por aqui
    
    res.render('home.hbs',{
        nombre: 'Andres perez'
    });

})

app.get('/about', function (req, res) {  //Todas las peticiones get con el / pasaran por aqui
    
    res.render('about.hbs');

})


app.get('/data', function (req, res) {  //Todas las peticiones get con el / pasaran por aqui
    res.send('Hola data')
})

app.listen(3000, ()=>{
    console.log('Escuchando en puerto 3000')
});