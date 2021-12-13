var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    const citas = [{
        "nombre de usuario": "MariaTqm",
        "apellido": "Apellido",
        "direccion": "Barrio 2 de Enero",
        "celular": "3124322234",
        "placa de vehiculo": "placa de behiculo",
        "marca": "marca",
        "servicio": "servicio",
        "nombre de mecanico": "mecanico",
        "fecha": "fecha",
        "hora": "hora"
    }]
    res.json(citas);
})


module.exports = router;