import React from 'react'
import '/src/Components/Footer/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className="container-fluid mt-5">
            <div className="row d-flex flex-wrap">
                <div className='col-6 row1'>
                    <div>
                        <NavLink to="/" className="navbar-brand"><i className="bi bi-tree-fill"></i><span className="text-warning">Seed</span>ling</NavLink>
                    </div>
                    <div className="col-7 mt-3">
                        We deliver fresh grocries and snacks straight to your door.
                        Trusted by thousands, we aim to make your shopping
                        experience simple and affordable.
                    </div>
                </div>
                <div className="col row2">
                    <div className="col link-headings">Quick Links</div>
                    <div className="mt-3">
                        <div><NavLink to="/">Home</NavLink></div>
                        <div><NavLink to="/bestsellers">Best Sellers</NavLink></div>
                        <div><NavLink to="allproducts">All Products</NavLink></div>
                        <div><NavLink to="/contact">Contact Us</NavLink></div>
                        <div><NavLink to="/faqs">FAQs</NavLink></div>
                    </div>
                </div>

                <div className="col row3">
                    <div className="col link-headings">Need Help?</div>
                    <div className="mt-3">
                        <div><NavLink to="/dilivery" className='mt-3'>Delivery Info</NavLink></div>
                        <div><NavLink to="/tarckorder">Track Order</NavLink></div>
                        <div><NavLink to="/quality">Quality</NavLink></div>
                    </div>
                </div>

                <div className="col row4">
                    <div className="col link-headings">Follow Us</div>
                    <div className="mt-3">
                        <div><NavLink to="/instagram" className='mt-3'>Instagram</NavLink></div>
                        <div><NavLink to="/twitter">Twitter</NavLink></div>
                        <div><NavLink to="/facebook">Facebook</NavLink></div>
                        <div><NavLink to="/youtube">Youtube</NavLink></div>
                    </div>
                </div>
            </div>
            <div className="container row5 text-center border-top border-2" id='copright-footer'>
                <div className="w-100"> Copyright 2025 <i className="bi bi-copright"></i> Seedlings.dev All Right Reserverd.</div>
            </div>
        </div>
    )
}

export default Footer