const express = require('express')
const controller = require('../controllers/userplant')
const router = express.Router()
const path = 'userplant'

router.get('/${path}',
    controller.getData
)

module.exports = router