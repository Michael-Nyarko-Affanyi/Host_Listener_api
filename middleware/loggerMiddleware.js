const logger = require('../logger')

const loggerMiddleware = (req, res, next) => {
    console.log(req)
   const method = req.method
    next()

}

module.exports = loggerMiddleware