import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
        
        console.log(recipe.hits[0].recipe.label, recipe.hits[0].recipe.image, 'GETTING RECIPE')
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
        <div className='container-fluid d-flex flex-column'>
            <h4 className='display-4 text-center mb-3'>
                Welcome to the meal recipes for vegans and vegetarians
            </h4>
            <button className='button btn-lg w-50 align-self-center fs-3' onClick={() => setShow(!show)} >View Recipes</button>
            {/* will need a label, cautions, dietLabels, images, ingredientLines:[], URL, credit, */}
            <div className='w-100 h-100 align-self-center'>
                <div className={`${style.card} d-flex gap-4 mt-3 h-100 w-100`}>
                    {!show
                        ? (
                            <div className='h-100 w-100 d-flex flex-column justify-content-center' >
                                <h1 className='display-5 text-center'>No Recipes in View</h1>
                            </div>
                        )
                        : (
                            recipe.hits.map((element, i) => (
                                <div key={i} className='h-100 w-100 d-flex flex-column justify-content-center' >
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={element.recipe.image} className="card-img-top" alt="..." />
                                        <div style={{ overflowX: 'scroll', height: '200px' }} className="card-body">
                                            <h5 className="card-title">{element.recipe.label}</h5>
                                            <p className="card-text text-danger">Allergies: {element.recipe.cautions}</p>
                                            <ol >
                                                {element.recipe.ingredientLines.map((ingredient, i) => (
                                                    <li key={i} >{ingredient}</li>
                                                ))}
                                            </ol>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={element.recipe.url}>
                                                Cooking Instructions
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                            
                        )}
                </div>
            </div>
        </div>
    );
};