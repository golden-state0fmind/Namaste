import React, { useState, useEffect } from 'react';
const axios = require('axios');
import style from '../styles/Meals.module.css';

export default function MealRecipes() {
    const REACT_APP_FOOD_KEY_ID = process.env.REACT_APP_FOOD_KEY_ID;
    const REACT_APP_FOOD_KEY = process.env.REACT_APP_FOOD_KEY;
    const urlAPI = `https://api.edamam.com/api/recipes/v2?type=public&q=tofu&app_id=${REACT_APP_FOOD_KEY_ID}&app_key=%20${REACT_APP_FOOD_KEY}%09&ingr=5-10&diet=high-protein&health=vegan&cuisineType=American&mealType=Dinner&imageSize=REGULAR`;
    const [recipe, setRecipe] = useState([]);
    const [show, setShow] = useState(false);
    const getRecipes = async() => {
        try {
            const response = await axios(urlAPI)
            console.log(response)
            setRecipe(response.data)
            }
        catch (error) {
            console.error(error)
        };
    }
    const getRecipeData = () => {
        console.log(recipe.hits[0].recipe.label, recipe.hits[0].recipe.image,'GETTING RECIPE')
    }
    useEffect(() => {
        //effect
        getRecipes()
        console.log(recipe, 'TESTING THE STATE OF THE RETURNED RESPONSE')
        return () => {
            //cleanup
        };
    }, []);


    return (
        <div className={style.body}>
            <button onClick={getRecipes} >Get More Recipes</button>
            <button onClick={getRecipeData} >Find More Recipes</button>
            <button onClick={() => setShow(!show)} >Find More Recipes</button>
            <div className={style.card}>
                Welcome to the meal recipes for vegans and vegetarians
            </div>
            {/* will need a label, cautions, dietLabels, images, ingredientLines:[], URL, credit, */}
            <div className={style.card}>
                {!show
                    ? (
                        null
                    )
                    : (
                        recipe.hits.map((element, i) => (
                            <div key={i} style={{width:'100%', height:'100%'}}>
                                <img src={element.recipe.image} />
                            </div>
                        ))
                    )}
            </div>
        </div>
    );
};