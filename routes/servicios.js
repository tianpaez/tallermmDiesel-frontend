var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    const servicios = [{
        "id": "123243",
        "servicios": "servicios",
        "descripcion": "descripcion",
        "costo": "costo",
        "duracion": "duracion",
        "estado": "estado",
        "mecanico": "mecanico",
        "servicio asignado": "servicio asignado",
        "fecha": "fecha"
    }]
    res.json(servicios);
})


module.exports = router;