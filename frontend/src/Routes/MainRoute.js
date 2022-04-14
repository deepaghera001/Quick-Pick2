import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Navbar from '../Components/partials/Navbar'
import SignUp from "../Components/SignUp";
import AddProduct from "../Components/Shop/AddProduct";
import Shopproduct from "../Components/Shop/ShopProducts"
import DisplayProducts from "../Components/Customer/DisplayProducts";
import ShowProduct2 from "../Components/Customer/ShowProduct2"
import DisplayShops from "../Components/Customer/DisplayShops"
import DisplayCart from "../Components/Customer/DisplayCart"

import Cart_With_shop from "../Components/Customer/Cart_With_shop";
import DisplayCartProduct from "../Components/Customer/DisplayCartProduct";

export const userContext = createContext([])
const Home = () => {

    return (
        <>
            hello world
        </>
    )
}

export const MainRoute = () => {
    const [isuser, setisuser] = useState('')
    return (
        <>
            <userContext.Provider value={{ isuser, setisuser }}>
                <Navbar />
                <Routes>

                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/addproduct" element={<AddProduct />}></Route>
                    <Route exact path="/shopproduct" element={<Shopproduct />}></Route>
                    <Route exact path="/product/:shop_id/:productId" element={<ShowProduct2 />}></Route>
                    <Route exact path="/displayshops" element={<DisplayShops />}></Route>
                    <Route exact path="/cart" element={<Cart_With_shop />}></Route>
                    <Route exact path="/cartproducts/:shop_id" element={<DisplayCartProduct />}></Route>
                    <Route exact path="/shopproducts/:shop_id" element={<DisplayProducts />}></Route>


                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/signup" element={<SignUp />}></Route>
                    <Route exact path="/displayProducts" element={<DisplayProducts />}></Route>
                    <Route exact path="/cart" element={<DisplayCart />}></Route>


                </Routes>
            </userContext.Provider>
        </>
    )
}
