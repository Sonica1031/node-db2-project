
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments("id")
    table.integer("VIN").notNull().unique()
    table.text("make").notNull()
    table.text("model").notNull()
    table.integer("mileage").notNull()
    table.text("transmissionType")
    table.text("titleState")
  })
};

exports.down = function(knex) {
  
};