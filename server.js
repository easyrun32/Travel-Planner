const fs = require('fs')
const path = require('path')

const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')

const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

const httpPort = (!process.env.PORT ? 80 : process.env.PORT)

const app = express()
const httpServer = http.createServer(app)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

connectDB()


let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan(':date[web] :method :url :status :res[content-length] - :response-time ms', { stream: accessLogStream }))
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())

app.use('/', require('./routes/router-index'))

httpServer.listen(httpPort, () => {
  console.log(`Server is alive on port: ${httpPort} runnign as: ${process.env.NODE_ENVIROMENT}`)
})