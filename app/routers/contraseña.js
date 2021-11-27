const express = require('express')
const controller = require('../controllers/contraseña')
const router = express.Router()
const path = 'contraseña'

router.get('/${path}',
    controller.getData
)

module.exports = router