var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    const mecanico = [{
        "id": "123243",
        "nombre": "Ana",
        "email": "smilt28@hotmail.com",
        "contraseña": "12234",
        "rol": "administrador"
    }]
    res.json(mecanico);
})


module.exports = router;