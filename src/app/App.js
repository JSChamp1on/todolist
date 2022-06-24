// libs
import React from "react";

// styles
import "@styles/global.scss";

// app
import { Redux, Router } from "@app";

export const App = () => (
    <Redux>
        <Router/>
    </Redux>
);