
const loadedEnvVariables = require('dotenv').config()

if (!loadedEnvVariables) {
    console.log("Can't load environment variables now!")
    process.exit(0)
}

const express = require('express')
const cors = require('cors')
const logger = require('./logger')
const {authRouter} = require("./routes");
const port = process.env.PORT
const loggerMiddleware = require('./middleware/loggerMiddleware')


const app = express()
app.use(express.json({limit: '100mb'}))
app.use(cors())

app.use(loggerMiddleware)

app.get('/', (req, res) => {
    res.end(`<h1>Hello, welcome</h1>`)
})

app.use('/auth', authRouter)
app.use('*', (req, res, next) => {
    res.end(`<h1>Page not found</h1>`)
})

app.listen(port, () => {
    logger.info(`Server started on http://localhost:${port}`)
})