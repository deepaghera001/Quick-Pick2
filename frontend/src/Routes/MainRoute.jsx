import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Navbar from '../Components/partials/Navbar'
import SignUp from "../Components/SignUp";
import AddProduct from "../Components/AddProduct";
import DisplayProducts from "../Components/Customer/DisplayProducts";

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

                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<SignUp />}></Route>
                <Route exact path="/displayProducts" element={<DisplayProducts />}></Route> 


            </Routes>
        </>
    )
}
