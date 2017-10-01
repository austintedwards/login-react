exports.up = function(knex, Promise) {
  return knex.schema.createTable("login", function (table) {
    table.increments()
    table.text("name")
    table.text("email")
    table.text("password")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("login")
}
