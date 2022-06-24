// libs
import React from "react";

// styles
import stylesCSS from "./styles.scss";

// interfaces
import { IReadonlyProps } from "./type";

export const ContentArea: React.FC<IReadonlyProps> = (readonlyProps): React.ReactElement => {
    const {
        className: classNameHOK,
        children,
    } = readonlyProps;

    return <>
        <div className={[classNameHOK, stylesCSS.contentAreaBlock].join(' ')}>
            { children }
        </div>
    </>;
};