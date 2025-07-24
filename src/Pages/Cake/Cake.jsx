import React, { useEffect, useState } from "react";
import '/src/Pages/Cake/Cake.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { NavLink , useNavigate } from 'react-router-dom'
import groceryData from '/src/data.js'
import { Toaster , toast } from "react-hot-toast";
import Footer from "../../Components/Footer/Footer";

function Cake({ setCartId , setProductInfoId}) {
    const [cake, setCake] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const filterFastfood = groceryData.filter((items) => items.category === "Cake");
        setCake(filterFastfood);
    }, [])

    const onSubmitHandler = (id) => {
        setCartId(id);
        toast.success("Added To Cart");
    }

         const onImageClicked = (id) => {
          setProductInfoId(id);
          navigate("/productinfo");
      }
    return (
        <>
        <div>
            <Toaster/>
            <div className="container-fluid bg-transparent">
                <div><NavLink to="/" className="bi bi-house text-success"> / </NavLink><NavLink to="/cake" className="text-success">CAKE</NavLink></div>
                <div className="d-flex col-12 flex-wrap gap-3 gap-md-5 justify-content-md-start justify-content-center mt-3">
                    {
                        cake.map((product) => {
                            return (
                                <figure key={product.id} className="col-5 col-md-2 border rounded">
                                    <img src={product.image} alt={product.name} className="cake-list col-12" onClick={() => onImageClicked(product.id)}/>
                                    <div className="captions">
                                        <figcaption className="text-secondary ms-2">{product.category}</figcaption>
                                        <figcaption className="ms-2">{product.name}</figcaption>
                                    </div>
                                    <div className="ratings d-flex ms-2">
                                        <figcaption className="text-success">{product.ratings}</figcaption>
                                        <figcaption className="text-success opacity-25">{product.noratings}</figcaption>
                                    </div>
                                    <div className="price d-flex justify-content-between p-2">
                                        <figcaption className="text-success">&#8377;{product.price}/-</figcaption>
                                        <button className="btn border-1 border-success btn-success text-white opacity-50 bi bi-cart2" onClick={() => onSubmitHandler(product.id)}></button>
                                    </div>
                                </figure>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Cake