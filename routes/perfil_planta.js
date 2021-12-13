var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    const plant = [{
        "id": "123243",
        "nombre": "Ana",
        "email": "smilt28@hotmail.com",
        "contraseña": "12234",
        "rol": "administrador"
    }]
    res.json(plant);
})

module.exports = router;