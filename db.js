const environment = process.env.NODE_ENV || "development"
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getResults
}

function getResults(rooms, db = database){
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
