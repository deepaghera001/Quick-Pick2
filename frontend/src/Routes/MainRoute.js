import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Navbar from '../Components/partials/Navbar'
import SignUp from "../Components/SignUp";
import AddProduct from "../Components/Shop/AddProduct";
import Shopproduct from "../Components/Shop/ShopProducts"
import DisplayProducts from "../Components/Customer/DisplayProducts";
import ShowProduct2 from "../Components/Customer/ShowProduct2"
import DisplayCart from "../Components/Customer/DisplayCart";
import Shop_card from "../Components/partials/Shop_card";
import Cart_With_shop from "../Components/Customer/Cart_With_shop";
const Home = () => {
    return (
        <>
            hello world
        </>
    )
}

export const MainRoute = () => {
    return (
        <>
            <Navbar />
            <Routes>

                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/addproduct" element={<AddProduct />}></Route>
                <Route exact path="/shopproduct" element={<Shopproduct />}></Route>
                <Route exact path="/product/:shop_id/:productId" element={<ShowProduct2 />}></Route>
                <Route exact path="/cart" element={<Cart_With_shop />}></Route>

                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<SignUp />}></Route>
                <Route exact path="/displayProducts" element={<DisplayProducts />}></Route>
                {/* <Route exact path="/cart" element={<DisplayCart />}></Route> */}


            </Routes>
        </>
    )
}
