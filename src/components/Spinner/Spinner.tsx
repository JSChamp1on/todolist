// libs
import React from "react";

// styles
import styleCSS from "./styles.scss";

// interfaces
import { IReadonlyProps } from "./type";

export const Spinner: React.FC<IReadonlyProps> = ({ payload }): React.ReactElement | null => {
    if (!payload?.loading) {
        return null;
    }

    return (
        <div className={styleCSS.ldsRing}>
            {
                Array(4).fill(<div/>).map((obj, index) => ({ ...obj, key: index }))
            }
        </div>
    );
};