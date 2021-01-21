
exports.up = (knex) => {
  return knex.schema.createTable('occupants', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('interests')
    table.boolean("allows_pets")
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('occupants')
}

