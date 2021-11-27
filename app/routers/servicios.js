const express = require('express')
const controller = require('../controllers/servicios')
const router = express.Router()
const path = 'servicios'

router.get('/${path}',
    controller.getData
)

module.exports = router