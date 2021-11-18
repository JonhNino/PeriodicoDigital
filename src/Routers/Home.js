//este Js es para ubicar las rutas que se utilizaran en el servidor
const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{///Ruta inicial
    res.render('Index.html',{title: 'Periodico Digital'});// cada vez que alguien entre a la ruta inicial
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});///cada vez que visisten esta ruta se le envia la ruta Index.html


router.get('/Economia',(req, res)=>{///Ruta inicial
    res.render('Economia.html',{title: 'Economia'});// cada vez que alguien entre a la ruta inicial
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});///cada vez que visisten esta ruta se le envia la ruta Index.html

router.get('/Titulares',(req, res)=>{///Ruta Contacto
    res.render('Titulares.html',{title: 'Titulares'});///NOmbre la ruta Titulares
    // cada vez que alguien entre a la ruta ruta Titulares
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});

router.get('/Deportes',(req, res)=>{///Ruta Contacto
    res.render('Deportes.html',{title: 'Deportes'});///NOmbre la ruta Deportes
    // cada vez que alguien entre a la ruta ruta Deportes
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});

router.get('/Colombia',(req, res)=>{///Ruta Contacto
    res.render('Colombia.html',{title: 'Colombia'});///NOmbre la ruta Deportes
    // cada vez que alguien entre a la ruta ruta Deportes
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});

router.get('/Farandula',(req, res)=>{///Ruta Contacto
    res.render('Farandula.html',{title: 'Farandula'});///NOmbre la ruta Deportes
    // cada vez que alguien entre a la ruta ruta Deportes
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});

router.get('/Tecnologia',(req, res)=>{///Ruta Contacto
    res.render('Tecnologia.html',{title: 'Tecnologia'});///NOmbre la ruta Deportes
    // cada vez que alguien entre a la ruta ruta Deportes
    // se maneja por una funcion voy a responder con un archivo que esta en dirname     
});

module.exports = router;  