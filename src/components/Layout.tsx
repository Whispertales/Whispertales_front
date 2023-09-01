import React from "react";
import { Outlet, Link } from "react-router-dom";
//範例用，目前沒用
const Layout = () => {
    return (
        <>
            <a href="http://localhost:3000/stable_diffusion">stable_diffusion</a>
            <a href="http://localhost:3000/instruction">instruction</a>
        </>
    )
};

export default Layout;