import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Banner from "./components/Banner/banner";

export function EliteOman() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/banner" element={<Banner/>}/>
            </Routes>
        </React.Fragment>
    );
}