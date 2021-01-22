exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('properties')()
  .then(empty('occupants'))

}