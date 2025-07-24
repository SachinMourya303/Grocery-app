import React, { useEffect, useState } from 'react'
import '/src/Components/BestSellers/BestSellers.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import '/src/Pages/ProductInfo/ProductInfo.css'
import groceryData from '/src/data.js'
import { NavLink, useNavigate } from 'react-router-dom'
import { Toaster , toast } from 'react-hot-toast'

const ProductInfo = ({ productInfo , setCartId , setProductInfoId }) => {
    const [relatedItem, setRelatedItem] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (productInfo && productInfo.length > 0) {
            const category = productInfo[0].category;
            const currentId = productInfo[0].id;

            const related = groceryData.filter(
                (product) => product.category === category && product.id !== currentId
            );
            setRelatedItem(related);
        }
    }, [productInfo]);

    const goBack = () => {
        navigate("/");
    }
     const onSubmitHandler = (id) => {
          setCartId(id);
          toast.success("Added To Cart")
      }
  
      const onImageClicked = (id) => {
          setProductInfoId(id);
          navigate("/productinfo");
      }

    return (
        <div className='container-fluid bg-transparent'>
            <Toaster/>
                <div><NavLink to="/" className="bi bi-house text-success"> / </NavLink><NavLink to="/productinfo" className="text-success">Details</NavLink></div>
            {
                productInfo.length > 0 && (
                    <div>
                        {
                            productInfo.map((product) => {
                                return (
                                    <div key={product.id} className='col-12 d-flex justify-content-between flex-wrap mt-5'>
                                        <img src={product.image} alt="" className='col-12 col-md-3 border rounded-3'/>
                                        <div className='d-flex flex-column col-12 col-md-7 mt-5'>
                                            <label className='text-secondary'>{product.category}</label>
                                            <label className='productinfotext '>{product.name}</label>
                                            <label className='productinfotext '>{product.price}</label>
                                            <div>
                                                <label className='productinfotext text-success'>{product.ratings}</label>
                                                <label className='productinfotext text-success opacity-25'>{product.noratings}</label>
                                            </div>
                                            <label className='col-12 col-md-8 productinfotext'>{product.description}</label>
                                            <div className='col-12 col-md-7 d-flex justify-content-between mt-5'>
                                                <button className='productinfotext  btn border col-5' onClick={goBack}>Go Back</button>
                                                <button className='productinfotext btn border bi bi-cart2 col-5' onClick={() => onSubmitHandler(product.id)}>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            {
                relatedItem.length > 0 ? (
                    <>
                    <h1 className='mt-5'>Related Products</h1>
                    <div className='col-12 d-flex flex-wrap justify-content-md-between justify-content-center gap-4 gap-md-0 mt-3'>
                        {
                            relatedItem.map((product) => {
                                return (
                                    <figure key={product.id} className="col-5 col-md-2 border rounded">
                                    <img src={product.image} alt={product.name} className="bestsellers-list col-12" onClick={() => onImageClicked(product.id)}/>
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
                        </>
                ) : (
                    <div className='col-12 text-center'>
                        <label className='fs-4 text-secondary'>no item present</label>
                    </div>
                )
            }
        </div>
    )
}

export default ProductInfo