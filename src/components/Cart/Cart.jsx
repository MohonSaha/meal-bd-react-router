import React from 'react';

const Cart = ({food}) => {
    // console.log(cart);

    // for (const food of cart){
    //     console.log(food.strMeal);
    //     const name =food.strMeal;
    // }
    console.log(food);

    return (
        <div>
            {/* <h3>Total Item: {cart.length}</h3> */}
            <div>
                {food.strMeal}
            </div>
        </div>
    );
};

export default Cart;