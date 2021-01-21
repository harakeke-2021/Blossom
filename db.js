const environment = process.env.NODE_ENV || "devlopment"
const config = require('./knexfile')[environment]
const db = require('knex')(config)

module.exports = {}