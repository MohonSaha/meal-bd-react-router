import React, { useEffect, useState } from 'react';
import './Food.css'
import { useLoaderData } from 'react-router-dom';
import SingleFood from '../SingleFood/SingleFood';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

const Food = () => {

    const foods = useLoaderData();
    // console.log(foods.meals);

    const [cart, setCart] = useState([]);


    const addToCartHandler = (food) =>{
        const newCart = [...cart, food];
        setCart(newCart);

        addToDb(food.id)
    }
    // console.log(cart);



    return (
        <div className='food-container'>
            <div className='food-item'>
                {
                    foods.meals.map(food => <SingleFood
                        food={food}
                        key={food.idMeal}
                        addToCartHandler={addToCartHandler}
                    ></SingleFood>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                {
                    cart.map(food => <Cart
                        food={food}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Food;