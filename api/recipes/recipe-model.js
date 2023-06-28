const db = require('../../Data/db-config')

async function getAllRecipes() {
    const recipes = await db('recipes')
    return recipes;
}

async function getRecipeById(recipeId) {
    const [recipe] = await db('recipes')
        .where("recipe_id", recipeId)
    return recipe;
}

async function getStepsById(recipeId) {
    const steps = await db('steps')
        .where("recipe_id", recipeId)
        console.log(steps[0].steps_id)
    return steps
}

async function getFullRecipeById(recipeId) {
    const [recipes] = await db('recipes')
    let steps = await db('steps')
        .where("recipe_id", recipeId)
        .select('steps_id', 'step_instruction', 'step_number')
    
    let stepsWithIngredients = [];

    for (let i = 0; i <= steps.length-1; i++) {
        let ingredients = await db('steps as s')
        .join('step_ingredient as si', 's.steps_id', '=', 'si.steps_id')
        .join('ingredients as i', 'i.ingredient_id', '=', 'si.ingredient_id')
        .where('s.recipe_id', recipeId)
        .where('s.steps_id', i+1)
        .select('ingredient', 'quantity', 'si.ingredient_id')
        
        stepsWithIngredients.push({
            ...steps[i], 
            ingredients: ingredients})
    };

    return {
        recipe_id: recipeId,
        recipe_name: recipes.recipe_name,
        steps: stepsWithIngredients
    };

}

module.exports = {
    getAllRecipes,
    getRecipeById,
    getStepsById,
    getFullRecipeById
}





