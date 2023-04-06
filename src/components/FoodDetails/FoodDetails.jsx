import React from 'react';
import './FoodDetails.css'
import { NavLink, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    console.log(food);

    const {strMeal, strMealThumb, strInstructions, strCategory, idMeal} = food.meals[0];

    return (
        <div className='details-container'>
            <div className='details-image'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className='food-info'>
                <p className='name'>Name: {strMeal}</p>
                <p className='catagory'>Catagory: {strCategory}</p>
                <p className='info'>Instructions: {strInstructions}
                 </p>
                
            </div><div>

            </div>
        </div>
    );
};

export default FoodDetails;