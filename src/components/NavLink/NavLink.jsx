// libs
import React, { createElement } from "react";
import { Link, useLocation } from "react-router-dom";

// styles
import stylesCSS from "./styles.scss";

export const NavLink = (readonlyProps) => {
    const {
        to,
        className: classNameHOK,
        children,
    } = {...readonlyProps};

    const location = useLocation();

    if (/^https?/.test(to)) {
        return (
            <a href={to}>{ children }</a>
        );
    }

    const param = [
        children.type,
        {
            ...children.props,
            bactive: location.pathname === to ? 1 : 0,
        }
    ];

    return (
        <Link to={to} className={[classNameHOK, stylesCSS.navLink].join(' ')} style={{}}>
            { createElement(...param) }
        </Link>
    );
};