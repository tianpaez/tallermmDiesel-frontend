const express = require('express')
const controller = require('../controllers/citas')
const router = express.Router()
const path = 'citas'

router.get('/${path}',
    controller.getData
)

module.exports = router