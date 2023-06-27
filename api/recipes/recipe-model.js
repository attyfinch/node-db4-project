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
    return steps
}




module.exports = {
    getAllRecipes,
    getRecipeById,
    getStepsById
}





// select 
//     * 
// from steps as st
// join step_ingredient as si
//     on st.steps_id = si.steps_id
// join ingredients as i
//     on i.ingredient_id = si.ingredient_id
// where st.steps_id = 2 AND st.recipe_id = 1