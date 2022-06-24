// libs
import React from "react";

// styles
import stylesCSS from "./styles.scss";

// interfaces
import { IReadonlyProps } from "./type";

export const GreyButton: React.FC<IReadonlyProps> = ({ label }): React.ReactElement => {
    return (
        <button type="button" className={stylesCSS.greyButton}>
            { label }
        </button>
    );
};