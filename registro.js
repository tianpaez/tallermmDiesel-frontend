const express = require('express')
const controller = require('../controllers/registro')
const router = express.Router()
const path = 'user'

router.get('/${path}',
    controller.getData
)

module.exports = router