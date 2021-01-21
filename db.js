const environment = process.env.NODE_ENV || "development"
const config = require('./knexfile')[environment]
const db = require('knex')(config)

module.exports = {
    getResults
}

function getResults(rooms){
    console.log(rooms)
    return db('properties')
    .join('occupants', 'properties.occupant_id', 'occupants.id')
    .where('properties.rooms', rooms)
    .select()
    .then(result => {
        console.log(result)
    return result
    })
}