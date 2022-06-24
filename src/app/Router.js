// libs
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// paths
import { commonComponents } from "./paths";

// pages
import { NotFound } from "@pages/NotFound";

const renderRoutes = ({ paths = [] }) => (
    paths.map(({ path, component: Component }, index) => (
        <Route
            key={index}
            exact path={path}
            element={<Component/>}
        />
    ))
);

export const Router = (readonlyProps) => (
    <BrowserRouter basename={env.BASE_PATH} {...readonlyProps}>
        <Routes>
            { renderRoutes({ paths: commonComponents }) }
            <Route path='*' component={NotFound}/>
        </Routes>
    </BrowserRouter>
);