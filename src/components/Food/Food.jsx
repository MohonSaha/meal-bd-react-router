import React from 'react';
import './Food.css'
import { useLoaderData } from 'react-router-dom';
import SingleFood from '../SingleFood/SingleFood';

const Food = () => {

    const foods = useLoaderData();
    // console.log(foods.meals);

    return (
        <div className='food-container'>
            <div className='food-item'>
                {
                    foods.meals.map(food => <SingleFood
                        food={food}
                        key={food.idMeal}
                    ></SingleFood>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Food;