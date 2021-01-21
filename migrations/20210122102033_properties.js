
exports.up = (knex) => {
  return knex.schema.createTable('properties', (table) => {
    table.increments('id')
    table.integer('occupant_id').references('occupants.id')
    table.string('address')
    table.string('type')
    table.integer('rooms')
    table.integer('bathrooms')
    table.boolean('garden')
    table.integer('price')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('properties')
}
