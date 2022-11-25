import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

export default () => {

    return(
            <Routes className='bg-[#1A1A1A] h-screen w-screen flex flex-col items-center overflow-hidden'>
                <Route path="/" caseSensitive={false} element={<Home />}/>
                <Route path="/login" caseSensitive={false} element={<Login />}/>
                <Route path="/register" caseSensitive={false} element={<Register />}/>
            </Routes>
    );
}