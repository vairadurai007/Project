import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";

export function EliteOman() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </React.Fragment>
    );
}