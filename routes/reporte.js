var express = require('express');
var router = express.Router();


router.get('/', (req, res, next) => {
    const reporte = [{
        "id": "123243",
        "servicios": "servicios",
    }]
    res.json(reporte);
})


module.exports = router;