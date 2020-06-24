
exports.seed = async function(knex) {
  await knex("cars").insert(
    {VIN : "12345", make: "Nissan", model: "Sentra", mileage: "80000", transmissionType: "Continuous variable transmission", titleState: "clean"},
  )
};