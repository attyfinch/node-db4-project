/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    await knex.schema.createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 256).notNullable()
    })
    await knex.schema.createTable('steps', table => {
      table.increments('steps_id')
      table.integer('step_number').notNullable().unsigned()
      table.string('step_instruction').notNullable()
      table.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipe_id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
  
    })
    await knex.schema.createTable('ingredients', table => {
      table.increments('ingredient_id')
      table.string('ingredient')
      table.string('quantity')
    })
    await knex.schema.createTable('step_ingredient', table => {
      table.increments('step_ingredient_id')
      table.integer('steps_id')
        .unsigned()
        .notNullable()
        .references('steps_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')

    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('step_ingredient')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
  };