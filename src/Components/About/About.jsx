import React from "react";
import '/src/Components/About/About.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

function About() {
    return (
        <div className="container-fluid bg-transparent mt-5">
            <div className="about-list-container d-flex justify-content-around flex-wrap w-100">
                <div className="about-list col-5 col-md-2 m-2 d-flex flex-column p-2 rounded" style={{boxShadow:"0px 0px 10px lightgreen"}}>
                    <i className="bi bi-truck fs-2 text-center text-success"></i>
                    <label className="text-secondary text-center" style={{fontSize:"100%"}}>Fast delivery services for groceries ensure that essential items reach your doorstep within hours of ordering. These services prioritize fresh produce.
                    </label>
                </div>
                <div className="about-list col-5 col-md-2 m-2 d-flex flex-column p-2 rounded" style={{boxShadow:"0px 0px 10px lightgreen"}}>
                    <i className="bi bi-currency-rupee fs-2 text-center text-success"></i>
                    <label className="text-secondary text-center" style={{fontSize:"100%"}}>Groceries are available at affordable prices to help meet daily household needs without straining your budget. From fresh fruits and vegetables to essential pantry staples.
                    </label>
                </div>
                <div className="about-list col-5 col-md-2 m-2 d-flex flex-column p-2 rounded" style={{boxShadow:"0px 0px 10px lightgreen"}}>
                    <i className="bi bi-award fs-2 text-center text-success"></i>
                    <label className="text-secondary text-center" style={{fontSize:"100%"}}>Online grocery services offer fast home delivery of fresh produce, packaged goods, and daily essentials through user-friendly websites and apps.
                    </label>
                </div>
                <div className="about-list col-5 col-md-2 m-2 d-flex flex-column p-2 rounded" style={{boxShadow:"0px 0px 10px lightgreen"}}>
                    <i className="bi bi-box2-heart fs-2 text-center text-success"></i>
                    <label className="text-secondary text-center" style={{fontSize:"100%"}}>Fresh fruits, vegetables, whole grains, pulses, and dairy are essential staples for a healthy grocery list. Include spices, cooking oils, nuts, and seeds for balanced nutrition.
                    </label>
                </div>
                <div className="about-list col-5 col-md-2 m-2 d-flex flex-column p-2 rounded" style={{boxShadow:"0px 0px 10px lightgreen"}}>
                    <i className="bi bi-patch-check fs-2 text-center text-success"></i>
                    <label className="text-secondary text-center" style={{fontSize:"100%"}}>A verified and secure grocery app ensures that all user transactions and personal data are protected using advanced encryption protocols.
                    </label>
                </div>
            </div>
        </div>
    )
}

export default About