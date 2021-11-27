const express = require('express')
const controller = require('../controllers/useradmin')
const router = express.Router()
const path = 'useradmin'

router.get('/${path}',
    controller.getData
)

module.exports = router