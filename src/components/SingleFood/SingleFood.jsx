import React from 'react';
import './SingleFood.css'

const SingleFood = ({food}) => {

    console.log(food);
    const {strMeal, strMealThumb, strInstructions, strCategory, idMeal} = food;


    return (
        <div className='card-container'>
            <div className='food-img'>
                {/* image  */}
                <img src={strMealThumb} alt="" />
            </div>
            <div className='food-info'>
                <p className='name'>Name: {strMeal}</p>
                <p className='catagory'>Catagory: {strCategory}</p>
                <p className='info'>Instructions: {strInstructions.substring(0, 200)}... <span className='btn-more'>See More</span> </p>
                
            </div>
                <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default SingleFood;