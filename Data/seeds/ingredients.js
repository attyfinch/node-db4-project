exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { ingredient: 'bread', quantity: '2 slices' },
      { ingredient: 'mayo', quantity: '1 tbsp' },
      { ingredient: 'mustard', quantity: '1 tbsp' },
      { ingredient: 'turkey', quantity: '8 oz' },
      { ingredient: 'ham', quantity: '8 oz' },
      { ingredient: 'cheddar cheese', quantity: '2 oz' }
    ]);
  };