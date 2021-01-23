const environment = process.env.NODE_ENV || "development"
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getResults
}

function getResults(rooms, bathrooms, type, db = database){
    return db('properties')
    .join('occupants', 'properties.occupant_id', 'occupants.id')
    .where('properties.rooms', rooms)
    .andWhere('properties.bathrooms', bathrooms)
    .andWhere('properties.type', type)
    .select()
    .then(result => result)}