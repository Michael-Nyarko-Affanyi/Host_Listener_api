const {login} = require("../../controllers/auth");
const router = require('express').Router()

router.route('/login').post(login)

module.exports = router