import React from "react";
import '/src/Components/TwoBanners/TwoBanners.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { NavLink } from 'react-router-dom'

function TwoBanners() {
    return (
        <div className="container-fluid bg-transparent">
            <div className="col-12 two-banners d-flex justify-content-between flex-wrap mt-3">
                <figure className="col-12 col-md-6 twobanners-figure position-relative">
                    <img src="/images/IMG_20250624_184744.jpg" alt="" className="towbanners-img col-12" />
                    <figcaption className="position-absolute top-0 w-50 ms-xl-5 mt-xl-5 fw-bold">Everyday Fresh & Clean Products
                        <br />
                        <NavLink to="/vegitables"><button className="btn">Shop Now <i className="bi bi-caret-right-fill">
                        </i></button></NavLink>
                    </figcaption>
                </figure>
                <figure className="col-12 col-md-6 twobanners-figure position-relative">
                    <img src="/images/IMG_20250624_184737.jpg" alt="" className="towbanners-img col-12" />
                    <figcaption className="position-absolute top-0 w-50 ms-xl-5 mt-xl-5 fw-bold">Make Your Breakfast Healthy
                        <br />
                        <NavLink to="/breakfast"><button className="btn">Shop Now <i className="bi bi-caret-right-fill"></i></button></NavLink>
                    </figcaption>
                </figure>

            </div>
        </div>
    )
}

export default TwoBanners