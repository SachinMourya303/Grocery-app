import React from "react";
import '/src/Components/Featuredcategores/Featuredcategories.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { NavLink } from "react-router-dom";

function Featuredcategories() {
    return (
        <div className="featured-categories">
            <div className="container-fluid bg-transparent">
                <h1 className="">Categories</h1>
                <div className="featured-item-container d-flex justify-content-between gap-3 text-center flex-wrap mt-3">
                    <figure className="bg-success bg-opacity-25 rounded-4">
                        <NavLink to="/grains"><img src="/images/grain_image.png" alt="" className="featured-img" /></NavLink>
                        <figcaption >Grains</figcaption>
                    </figure>
                    <figure className="bg-danger bg-opacity-25 rounded-4">
                        <NavLink to="/oatmeal"><img src="/images/bowl with tasty oatmeal berries.png" alt="" className="featured-img" /></NavLink>
                        <figcaption >Oat Meal</figcaption>
                    </figure>
                    <figure className="bg-warning bg-opacity-25 rounded-4">
                        <NavLink to="/cake"><img src="/images/chocolate_cake_image.png" alt="" className="featured-img" /></NavLink>
                        <figcaption >Cake</figcaption>
                    </figure>
                    <figure className="bg-info bg-opacity-25 rounded-4">
                        <NavLink to="/fruits"><img src="/images/fruits.png" alt="" className="featured-img" /></NavLink>
                        <figcaption >Fruits</figcaption>
                    </figure>
                    <figure className="bg-warning bg-opacity-25 rounded-4">
                        <NavLink to="/dairyproducts"><img src="/images/dairy_product_image.png" alt="" className="featured-img" /></NavLink>
                        <figcaption >Dairy</figcaption>
                    </figure>
                    <figure className="bg-danger bg-opacity-25 rounded-4">
                        <NavLink to="/icecream"><img src="/images/tasty ice cream balls and caramel sauce.png" alt="" className="featured-img" /></NavLink>
                        <figcaption >Ice Cream</figcaption>
                    </figure>
                    <figure className="bg-info bg-opacity-25 rounded-4">
                        <NavLink to="/drinks"><img src="/images/fanta_image_1.png" alt="" className="featured-img" /></NavLink>
                        <figcaption >Drinks</figcaption>
                    </figure>
                    <figure className="bg-warning bg-opacity-25 rounded-4">
                        <NavLink to="/vegitables"><img src="/images/Vegetable-Collection.png" alt="" className="featured-img" /></NavLink>
                        <figcaption >Vegitables</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Featuredcategories