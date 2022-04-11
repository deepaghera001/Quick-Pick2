import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Navbar from '../Components/Navbar'
import SignUp from "../Components/SignUp";
import AddProduct from "../Components/Shop/AddProduct";
import Shopproduct from "../Components/Shop/ShopProducts"


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

                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<SignUp />}></Route>

            </Routes>
        </>
    )
}
