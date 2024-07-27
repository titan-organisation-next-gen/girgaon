/* eslint-disable no-console */
const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const ejs = require('ejs')
const AppConfig = require('./config/app-config')
const Routes = require('./routes')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

class Server {
  constructor() {
    this.app = express()
    this.app.use(express.json({ limit: '50mb' }))
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }))
    this.http = http.Server(this.app)
  }

  appConfig() {
    new AppConfig(this.app).includeConfig()
  }

  /* Including app Routes starts */
  includeRoutes() {
    new Routes(this.app).routesConfig()
  }
  /* Including app Routes ends */

  startTheServer() {
    this.appConfig()
    this.includeRoutes()

    const port = process.env.NODE_SERVER_PORT || 3000
    const host = process.env.NODE_SERVER_HOST || 'localhost'

    this.http.listen(port, host, () => {
      console.log(`Listening on http://${host}:${port}`)
      //UNCOMMENT ONLY WHEN NEW CONTRACTS NEED TO BE DEPLOYED
      // contractDeployScript.deployContracts();
    })
  }
}

module.exports = new Server()
