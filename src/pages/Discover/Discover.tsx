// libs
import React from "react";

// styles
import stylesCSS from "./styles.scss";

// app
import { constants as constants_app } from "@app";

// images
import cupPNG from "@images/cup.png";

// components
import { ContentHeader } from "@components/ContentHeader";
import { NavLink } from "@components/NavLink";
import { GreyButton } from "@components/Buttons/GreyButton";

// containers
import { NavigationPanel } from "@containers/NavigationPanel";
import { ContentArea } from "@containers/ContentArea/ContentArea";

// constants
const {
    HOMEPAGE,
} = constants_app;

export const Discover: React.FC = (): React.ReactElement => {
    return (
        <div className={stylesCSS.wrapper}>
            <NavigationPanel className={stylesCSS.navigationPanel}/>
            <ContentArea className={stylesCSS.contentArea}>
                <ContentHeader title="Discover"/>
                <div className={stylesCSS.flexAlign}>
                    <img src={cupPNG} alt="cup"/>
                    <span style={{ opacity: 0.5 }}>The page is under construction...</span>
                    <NavLink to={HOMEPAGE.PATH}>
                        <GreyButton label="Go to Training"/>
                    </NavLink>
                </div>
            </ContentArea>
        </div>
    )
};