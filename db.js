const environment = process.env.NODE_ENV || "devlopment"
const config = require('./knexfile')[environment]
const db = require('knex')(config)

module.exports = {
    getResults
}

function getResults(rooms){
    return db('properties')
    .join('occupants', 'properties.occupants_id', 'occupants.id')
    .where('rooms', rooms)
    console.log(rooms)
}