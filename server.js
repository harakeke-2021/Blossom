const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const routes = require('./routes')

// Middleware
server.engine('hbs', hbs({ extname: "hbs"}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extened: true}))
server.use(express.static('public'))

// Routes

server.use('/', routes)



module.exports = server