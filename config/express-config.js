const path = require('path')
const express = require('express')
class ExpressConfig {
  constructor(app) {
    this.app = app
  }

  setAppEngine() {
    this.app.set('view engine', 'pug')
    this.app.set('views', path.join(__dirname, '../views'))
    this.app.use('/public', express.static(path.join(__dirname, '/../public')))
  }
}
module.exports = ExpressConfig
