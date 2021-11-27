const express = require('express')
const controller = require('../controllers/home')
const router = express.Router()
const path = 'home'

router.get('/${path}',
    controller.getData
)

module.exports = router