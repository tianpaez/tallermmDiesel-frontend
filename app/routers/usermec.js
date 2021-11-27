const express = require('express')
const controller = require('../controllers/usermec')
const router = express.Router()
const path = 'usermec'

router.get('/${path}',
    controller.getData
)

module.exports = router