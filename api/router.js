const express = require('express')
const router = express.Router();
const Controller = require('./controller')

router.post('/sendEmail', Controller.sendEmail)

module.exports = router;