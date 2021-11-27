const express = require('express')
const controller = require('../controllers/gestiserv')
const router = express.Router()
const path = 'gestiserv'

router.get('/${path}',
    controller.getData
)

module.exports = router