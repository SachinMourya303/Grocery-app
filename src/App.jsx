import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import groceryData from '/src/data.js'
import Hero from "./Components/Herocontenet/Hero.jsx";
import Featuredcategories from "./Components/Featuredcategores/Featuredcategories.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Oatmeal from "./Pages/Oatmeal/Oatmeal.jsx";
import Cake from "./Pages/Cake/Cake.jsx";
import Fruits from "./Pages/Fruits/Fruits.jsx";
import Icecream from "./Pages/Icecream/Icecream.jsx";
import Vegitables from "./Pages/Vegitables/Vegitables.jsx";
import TwoBanners from "./Components/TwoBanners/TwoBanners.jsx";
import BestSellers from "./Components/BestSellers/BestSellers.jsx";
import AllProducts from "./Pages/AllProducts/AllProducts.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Dairyproducts from "./Pages/Dairyproducts/Dairyproducts.jsx";
import Drinks from "./Pages/Drinks/drinks.jsx";
import Grains from "./Pages/Grains/Grains.jsx";
import SearchedProducts from "./Pages/SearchedProducts/SearchedProducts.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import ProductInfo from "./Pages/ProductInfo/ProductInfo.jsx";
import BreakFast from "./Pages/BreakFast/BreakFast.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Signup from "./Pages/Auth/SignUp.jsx";



function App() {

    const [searchValue, setSearchValue] = useState("");
    const [searchProduct, setSearchProduct] = useState([]);
    const [cartId, setCartId] = useState("");
    const [cartStorage, setCartStorage] = useState([]);
    const [productInfoId, setProductInfoId] = useState("");
    const [productInfo , setProductInfo] = useState([]);


    useEffect(() => {
        if (searchValue === "") {
            return;
        }
        const searchFilter = () => groceryData.filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
            || product.category.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchProduct(searchFilter);
    }, [searchValue]);

    useEffect(() => {
        const cartFilter = () => groceryData.filter((product) => product.id == cartId);
        setCartStorage((prevCart) => [...prevCart, ...cartFilter()]);
    }, [cartId])

    useEffect(() => {
        const filterProductInfo = () => groceryData.filter((product) => product.id == productInfoId);
        setProductInfo(filterProductInfo());
    },[productInfoId])
    const Homepage = ({ setCartId , setProductInfoId }) => {
        return (
            <>
                <Hero />
                <Featuredcategories />
                <TwoBanners />
                <BestSellers setCartId={setCartId} setProductInfoId={setProductInfoId}/>
                <About />
                <Footer />
            </>
        )
    }
    
    return (
        <>
            <BrowserRouter>
                <Navbar searchValue={searchValue} setSearchValue={setSearchValue} cartStorage={cartStorage}/>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={<Homepage setCartId={setCartId} setProductInfoId={setProductInfoId}/>} />
                        <Route path="/grains" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Grains setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/oatmeal" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Oatmeal setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/cake" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Cake setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/fruits" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Fruits setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/dairyproducts" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Dairyproducts setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/icecream" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Icecream setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/drinks" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Drinks setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/vegitables" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Vegitables setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/allproducts" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><AllProducts setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/bestsellers" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><BestSellers setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/about" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><About /></motion.div>} />
                        <Route path="/searchedproducts" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><SearchedProducts searchProduct={searchProduct} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/cart" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Cart cartStorage={cartStorage} setCartStorage={setCartStorage} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/productinfo" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><ProductInfo productInfo={productInfo} setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/breakfast" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><BreakFast productInfo={productInfo} setCartId={setCartId} setProductInfoId={setProductInfoId}/></motion.div>} />
                        <Route path="/signin" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Login/></motion.div>} />
                        <Route path="/signup" element={<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}><Signup/></motion.div>} />
                    </Routes>
                </AnimatePresence>
            </BrowserRouter>
        </>
    )
}

export default App