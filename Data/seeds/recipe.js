exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Turkey Sandwich'},
      { recipe_name: 'Ham Sandwich'}
    ]);
  };