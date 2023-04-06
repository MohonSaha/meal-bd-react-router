import React from 'react';
import './Home.css'
import Lottie from "lottie-react";
import food from '../../assets/food.json'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='article-container'>
                <p className='header'>Welcome to the Culinary Delights: <span className='special-header'>A Gastronomic Adventure!</span></p>
                <p>Indulge in the world of flavors, aromas, and culinary creations with our food website, Culinary Delights! From classic recipes to modern twists, we are your ultimate destination for all things food. Our team of passionate food enthusiasts and experienced chefs work tirelessly to bring you the most mouthwatering recipes, culinary tips, and food-related news. With Culinary Delights, get ready to embark on a gastronomic adventure like no other. Whether you're a seasoned chef or a cooking novice, our website caters to all skill levels and taste preferences. We believe that food is not just about sustenance, but also a form of art that ignites our senses and brings people together.</p>
                <div className='home-btn'>
                    <NavLink className="food-button btn" to="/food">Visit Food</NavLink>
                    <NavLink className="about-button btn" to="/about">About</NavLink>
                    
                </div>
            </div>
            <div className='anni-container'>
            <Lottie animationData={food} />;

            </div>
        </div>
    );
};

export default Home;