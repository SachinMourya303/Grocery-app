import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '/src/Pages/Cart/Cart.css'
import { Toaster, toast } from 'react-hot-toast'

const Cart = ({ cartStorage, setCartStorage ,setProductInfoId }) => {
    console.log("CartStorage :", cartStorage)

    const navigate = useNavigate();

    const onShoppingHandle = () => {
        navigate("/");
    }

    const onSubmitHandle = () => {
        navigate("/");
    }

    const handleIncrement = (id) => {
        setCartStorage((prevCart) => prevCart.map((item) => item.id === id ? { ...item, count: Number(item.count) + 1 } : item))
    }
    const handleDecrement = (id) => {
        setCartStorage((prevCart) => prevCart.map((item) => item.id === id ? { ...item, count: Math.max(Number(item.count) - 1, 1) } : item))
    }
    const handleDelete = (id) => {
        const filterId = cartStorage.filter((item) => item.id !== id)
        setCartStorage(filterId);
        toast.success("Item Removed");
    }

         const onImageClicked = (id) => {
          setProductInfoId(id);
          navigate("/productinfo");
      }
    return (
        <>
            <div>
                <Toaster />
                <div className="cart-container container-fluid bg-transparent">
                    <div><NavLink to="/" className="bi bi-house text-success"> / </NavLink><NavLink to="/cart" className="text-success">CART</NavLink></div>
                    <div className='col-12 d-flex justify-content-between flex-wrap'>
                        <div className="d-flex col-12 col-md-8 flex-wrap mt-3">
                            {
                                cartStorage.length > 0 && (
                                    <div className='col-12 p-3'>
                                        <div className="cart-heading col-12 d-flex justify-content-between border-bottom pb-3 border-success">
                                            <label className='text-center fw-bold' style={{ width: "20%" }}>Products</label>
                                            <label className='text-center fw-bold' style={{ width: "20%" }}>Details</label>
                                            <label className='text-center fw-bold' style={{ width: "20%" }}>Qty</label>
                                            <label className='text-center fw-bold' style={{ width: "20%" }}>Total</label>
                                            <label className='text-center fw-bold' style={{ width: "20%" }}>Action</label>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                cartStorage.length > 0 &&(
                                    cartStorage.map((product) => {
                                        return (
                                            <div key={product.id} className='p-3 col-12'>
                                                <figure className='cart-body col-12 d-flex justify-content-between pb-3 border-bottom border-success'>
                                                    <img src={product.image} alt={product.name} className='border rounded border-success' style={{ width: "20%" }} onClick={() => onImageClicked(product.id)}/>
                                                    <div className="d-flex flex-column" style={{ width: "20%" }}>
                                                        <div className='text-center' style={{ marginTop: "35%" }}>
                                                            <figcaption className='fw-bold'>{product.name}</figcaption>
                                                            <figcaption className='text-seconndary'>{product.category}</figcaption>
                                                        </div>
                                                    </div>
                                                    <div className=" p-4" style={{ width: "20%" }}>
                                                        <div className='indefun d-flex flex-column justify-content-center flex-md-row' style={{ marginTop: "35%" }}>
                                                            <button className='indefun-btn btn border rounded-0 btn-success opacity-75' style={{ height: "40px" }} onClick={() => handleIncrement(product.id)}>+</button>
                                                            <label className='indefun-btn  btn border rounded-0' style={{ height: "40px" }}>{product.count}</label>
                                                            <button className='indefun-btn btn border rounded-0 btn-success opacity-75' style={{ height: "40px" }} onClick={() => handleDecrement(product.id)}>-</button>
                                                        </div>
                                                    </div>

                                                    <div style={{ width: "20%" }}>
                                                        <figcaption className='text-center fw-bold' style={{ marginTop: "40%" }}>&#8377;{Number(product.price) * Number(product.count)}/-</figcaption>
                                                    </div>

                                                    <div style={{ width: "20%" }}>
                                                        <figcaption className='text-center fw-bold fs-4 text-danger' style={{ marginTop: "35%", cursor: "pointer" }} onClick={() => handleDelete(product.id)}>&times;</figcaption>
                                                    </div>
                                                </figure>
                                            </div>
                                        )
                                    })
                                )
                            }
                        </div>

                        { cartStorage.length == 0 &&
                            (
                                    <div className='d-flex flex-column col-12'>
                                        <label className='fs-4 text-secondary mt-5 col-12 text-center'>Your Cart Is Empty</label>
                                        <div className='col-12 text-center'>
                                            <button className='btn bi bi-arrow-left text-center mt-5 border border-success' onClick={onShoppingHandle}> Contine Shopping</button>
                                        </div>
                                    </div>
                                )
                        }
                        
                        <div className='col-12 col-md-4 mt-3'>
                            {
                                cartStorage.length > 0 && (
                                    <div className='col-12 shadow p-3 rounded'>

                                        <div className='col-12 text-center'>
                                            <label className='place-order-text fs-1'>Order Summery</label>
                                        </div>

                                        <div className='col-12 d-flex justify-content-between p-2'>
                                            <label className='cart-text fs-5 mt-3'>Total Products</label>
                                            <label className='cart-text fs-5 mt-3'>{cartStorage.length}</label>
                                        </div>

                                        <div className='col-12 d-flex justify-content-between p-2'>
                                            <label className='cart-text fs-5 mt-3'>Delivery Charges</label>
                                            <label className='cart-text text-success fs-5 mt-3'>Free</label>
                                        </div>

                                        <div className='col-12 d-flex justify-content-between p-2'>
                                            <label className='cart-text fs-5 mt-3'>Total Amount</label>
                                            <label className='cart-text fs-5 mt-3'>
                                                {
                                                    cartStorage.reduce((acc, product) => acc + product.price * Number(product.count), 0)
                                                }
                                            </label>
                                        </div>

                                        <div className='col-12 d-flex justify-content-around mt-3'>
                                            <button className='cart-btn btn border-0 bi bi-arrow-left col-6 p-2' onClick={onShoppingHandle}> Continue Shopping</button>
                                            <button className='cart-btn btn btn-success col-5 p-3' onClick={onSubmitHandle}>Checkout</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart