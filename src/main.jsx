import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import About from './components/About/About';
import Food from './components/Food/Food';
import FoodDetails from './components/FoodDetails/FoodDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/food",
        element: <Food></Food>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      },
      {
        path: '/food/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      },
      {
        path: "/order",
        element: <Order></Order>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
