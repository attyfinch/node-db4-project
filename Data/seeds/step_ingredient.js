exports.seed = function(knex, Promise) {
return knex('step_ingredient').insert([ 
{ steps_id: 1, ingredient_id: 1},
{ steps_id: 2, ingredient_id: 2},
{ steps_id: 2, ingredient_id: 3},
{ steps_id: 3, ingredient_id: 4},
{ steps_id: 3, ingredient_id: 6},
{ steps_id: 5, ingredient_id: 1},
{ steps_id: 6, ingredient_id: 2},
{ steps_id: 6, ingredient_id: 3},
{ steps_id: 7, ingredient_id: 5},
{ steps_id: 7, ingredient_id: 6}
]);
};