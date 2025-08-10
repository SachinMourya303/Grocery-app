import React, { useEffect, useState } from "react";
import '/src/Components/Navbar/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = ({ searchValue, setSearchValue, cartStorage}) => {
    const navigate = useNavigate();
    const onchangeHandler = (e) => {
        setSearchValue(e.target.value);
    }
    const onSubmitHandler = () => {
        if (searchValue === "") {
            return;
        }
        else {
            navigate("/searchedproducts");
            setSearchValue("");
        }
    }

    const { isSignedIn , isLoaded , user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const formData = new FormData();
      formData.append("access_key", "bb770dec-7702-4229-a48f-1fd79d148cb2");
      formData.append("subject", "User Logged In");
      formData.append("name", user.fullName || "No Name");
      formData.append("email", user.primaryEmailAddress.emailAddress);
      formData.append("message", `User ${user.fullName} logged in with email ${user.primaryEmailAddress.emailAddress}`);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Web3Forms response:", data);
        })
        .catch((err) => console.error("Web3Forms error:", err));
    }
  }, [isLoaded, isSignedIn, user]);

    return (
        <>
            <div className="border-bottom border-success">
                <nav className="container-fluid p-2 navbar navbar-expand-md bg-transparent">
                    <NavLink to="/" className="navbar-brand"><i className="bi bi-tree-fill"></i><span className="text-warning">Seed</span>ling</NavLink>
                    <div className="md-buttons d-flex">
                        <div>
                            <NavLink to="/cart" className="md-cart bi bi-cart2 fs-1 d-none" style={{ marginTop: "-8px" }}></NavLink>
                            <div className="position-absolute ms-3 bg-warning rounded-5 d-md-none" style={{ height: "20px", width: "20px", paddingLeft: "5px", top: "12px" }}> {cartStorage.length}</div>
                        </div>

                        <div className="auth d-md-none list-unstyled ms-2 mt-2">
                                        {
                                            <div>
                                                {isSignedIn ? (
                                                    <li className="nav-item ms-2 mt-2">
                                                        <span><UserButton /></span>
                                                    </li>
                                                ) : (
                                                    <div className="dropdown">
                                                        <i className="bi bi-person-fill fs-1 ms-2 text-success" type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                        <ul className="dropdown-menu dropdown-menu-end p-0 dropdown-menu-dark">
                                                            <div className="dropdown-item text-center">
                                                                <SignInButton className="btn btn-sm text-white">
                                                                    <button className="btn">Login</button>
                                                                </SignInButton>
                                                            </div>

                                                        </ul>
                                                    </div>
                                                )}

                                            </div>
                                        }
                                    </div>

                        <div className="navbar-toggler border-0">
                            <h1 className="bi bi-grid-3x3-gap-fill mt-2 text-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></h1>
                        </div>
                    </div>
                    <div id="offcanvas" className="offcanvas offcanvas-end" style={{ width: "200px" }}>
                        <div className="offcanvas-header">
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body text-align-center">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item d-flex">
                                    <NavLink to="/" className="nav-link d-flex flex-column"><span>Home</span> <span className="navigation-bar"></span></NavLink>
                                </li>
                                <li className="nav-item d-flex">
                                    <NavLink to="/bestsellers" className="nav-link d-flex flex-column"><span>Bestsellers</span> <span className="navigation-bar"></span></NavLink>
                                </li>
                                <li className="nav-item d-flex">
                                    <NavLink to="/about" className="nav-link d-flex flex-column"><span>About</span> <span className="navigation-bar"></span></NavLink>
                                </li>
                                <li className="nav-item d-flex">
                                    <NavLink to="/vegitables" className="nav-link d-flex flex-column"><span>FreshMart</span> <span className="navigation-bar"></span></NavLink>
                                </li>
                                <li className="nav-item d-flex">
                                    <NavLink to="/allproducts" className="nav-link d-flex flex-column"><span>Product</span> <span className="navigation-bar"></span></NavLink>
                                </li>

                                 <li className="nav-item">
                                    <div className="auth">
                                        {
                                            <div>
                                                {isSignedIn ? (
                                                    <i className="nav-item d-flex">
                                                        <span className="nav-link" style={{height:"40px"}}>
                                                            <UserButton/>
                                                        </span>
                                                    </i>
                                                ) : (
                                                    <div className="dropdown">
                                                        <i className="bi bi-person-fill fs-3 ms-2 text-success" type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                        <ul className="dropdown-menu dropdown-menu-lg-end p-0 dropdown-menu-dark">
                                                            <div className="dropdown-item text-center">
                                                                <SignInButton className="btn btn-sm text-white">
                                                                    <button className="btn">Login</button>
                                                                </SignInButton>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                )}

                                            </div>
                                        }
                                    </div>
                                </li>

                                <li className="searchBar nav-item ms-lg-5 me-lg-5 border border-1 border-success p-1 rounded-5 justify-content-between d-none d-lg-flex">
                                    <input type="text" className="border-0 rounded-5 p-1" placeholder="Search grocery..." value={searchValue} onChange={onchangeHandler} />
                                    <button className="bi bi-search border-0 btn btn-success rounded-5" onClick={onSubmitHandler}></button>
                                </li>
                                <li className="nav-item d-flex position-relative d-none d-md-block">
                                    <NavLink to="/cart" className="nav-link bi bi-cart2 fs-4 d-none d-md-block" style={{ marginTop: "-8px" }}></NavLink>
                                    <div className="position-absolute top-0 ms-4 bg-warning rounded-5" style={{ height: "20px", width: "20px", paddingLeft: "5px", paddingBottom: "4px" }}> {cartStorage.length}</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container d-flex justify-content-between mt-3 rounded d-lg-none" id="inputBox">
                <input type="text" className="col-10 rounded border p-1" placeholder="Search grocery..." value={searchValue} onChange={onchangeHandler} />
                <button className="col-2 bi bi-search border-0 btn btn-success rounded" onClick={onSubmitHandler}></button>
            </div>
        </>
    )
}

export default Navbar
