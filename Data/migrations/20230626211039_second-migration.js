/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('recipies', table => {
    table.increments('recipe_id')
  })

  await knex.schema.createTable('steps', table => {
    table.increments('step_id')
  })

  await knex.schema.createTable('ingredients', table => {
    table.increments('ingredient_id')
  })

  await knex.schema.createTable('step_ingredients', table => {
    table.increments('step_ingredient')
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('step_ingredient')
  .dropTableIfExists('ingredient_id')
  .dropTableIfExists('step_id')
  .dropTableIfExists('recipies')
};
