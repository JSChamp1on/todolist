// libs
import React, { useState, useEffect, useRef } from "react";

// styles
import stylesCSS from "./styles.scss";

// app
import { constants as constants_app } from "@app";

// images
import logoSVG from "@images/logo.svg";
import trainingSVG from "@images/training.svg";
import discoverSVG from "@images/discover.svg";
import dietSVG from "@images/diet.svg";
import burgerSVG from "@images/burger.svg";

// components
import { NavLink } from "@components/NavLink";
import { NavigationButton } from "@components/Buttons";

// interfaces
import { IReadonlyProps } from "./type";

// constants
const {
    HOMEPAGE,
    DISCOVER,
    DIET,
} = constants_app;

export const NavigationPanel: React.FC<IReadonlyProps> = (readonlyProps): React.ReactElement => {
    const {
        className: classNameHOK,
    } = readonlyProps;

    const
        refBurger = useRef(null),
        refNav = useRef(null);

    const [bIsOpenState, bIsOpenHandler] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('click', closeMenu, false);

        return () => {
            window.removeEventListener('click', closeMenu, false);
        };
    }, []);

    const closeMenu = (event: any): void => {
        if (!bIsOpenState && !event.path.some((target: React.ReactNode) => target === refBurger.current || target === refNav.current)) {
            bIsOpenHandler(false);
        }
    };

    return (
        <div className={[classNameHOK, stylesCSS.navBlock].join(' ')}>
            <button ref={refBurger} className={stylesCSS.burger} type="button" onClick={bIsOpenHandler.bind(null, !bIsOpenState)}>
                <img src={burgerSVG} alt="menu"/>
            </button>
            <NavLink to={HOMEPAGE.PATH}>
                <img src={logoSVG} alt="Amazing App"/>
            </NavLink>

            <nav ref={refNav} className={[stylesCSS.nav, bIsOpenState ? stylesCSS.show : ''].join(' ')}>
                <li>
                    <NavLink to={HOMEPAGE.PATH}>
                        <NavigationButton imgUrl={trainingSVG} label={HOMEPAGE.LABEL}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={DISCOVER.PATH}>
                        <NavigationButton imgUrl={discoverSVG} label={DISCOVER.LABEL}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={DIET.PATH}>
                        <NavigationButton imgUrl={dietSVG} label={DIET.LABEL}/>
                    </NavLink>
                </li>
            </nav>
        </div>
    );
};