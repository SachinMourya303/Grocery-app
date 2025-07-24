import React from "react";
import '/src/Components/Herocontenet/Hero.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (
        <div className="container-fluid bg-transparent">
            <div className="main-hero-banner">
                <figure className="w-100 position-relative">
                    <img src="/images/background.png" alt="" className="main-img1 w-100 d-none d-md-block" />
                    <img src="/images/background3.png" alt="" className="main-img2 w-100 d-md-none" />
                    <figcaption className="col-12 col-md-6 d-flex position-absolute top-0 ms-md-5 mt-5">
                        <span id="sloganframe" className="d-block col-12 fw-bold">Taste The Freshness in Every Bite, Bringing Natures's Freshness To You!
                            <br />
                            <div className="col-12 col-lg-4 d-flex justify-content-center">
                                <button className="col-6 col-lg-12 btn p-3 mt-3 mt-md-5 btn btn-success opacity-50" onClick={() => navigate("/allproducts")}>Shop Now <i className="bi bi-caret-right-fill"></i></button>
                            </div>
                        </span>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Hero