exports.seed = function(knex, Promise) {
    return knex('steps').insert([   
      { step_number: 1, step_instruction: "Toast bread for 4 minutes", recipe_id: 1},
      { step_number: 2, step_instruction: "Spread mayo and mustard on bread", recipe_id: 1},
      { step_number: 3, step_instruction: "Place turkey and cheese on bread", recipe_id: 1},
      { step_number: 4, step_instruction: "Finish assembling sandwich after adding additional option ingredients to taste ", recipe_id: 1},
      { step_number: 1, step_instruction: "Toast bread for 4 minutes", recipe_id: 2},
      { step_number: 2, step_instruction: "Spread mayo and mustard on bread", recipe_id: 2},
      { step_number: 3, step_instruction: "Place ham and cheese on bread", recipe_id: 2},
      { step_number: 4, step_instruction: "Finish assembling sandwich after adding additional option ingredients to taste ", recipe_id: 2}
    ]);
  };