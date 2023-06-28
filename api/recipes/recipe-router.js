const express = require('express')
const Recipes = require('./recipe-model')
const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getAllRecipes()
        .then((recipes) => {
            res.status(200).json(recipes)
        })
})

// router.get('/:id', (req, res) => {
//     Recipes.getRecipeById(req.params.id)
//         .then((recipe) => {
//             res.status(200).json(recipe)
//         })
// })

// router.get('/:id/steps', (req, res) => {
//     Recipes.getStepsById(req.params.id)
//         .then((steps) => {
//             res.status(200).json(steps)
//         })
// })

// finished product!!!
router.get('/:id', (req, res) => {
    Recipes.getFullRecipeById(req.params.id)
        .then((recipe) => {
            res.status(200).json(recipe)
        })
})


module.exports = router;
  