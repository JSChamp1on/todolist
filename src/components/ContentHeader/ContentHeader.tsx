// libs
import React from "react";

// style
import styleCSS from "./styles.scss";

// interfaces
import { IReadonlyProps } from "./type";

export const ContentHeader: React.FC<IReadonlyProps> = (readonlyProps): React.ReactElement => {
    const {
        title,
        description,
    } = readonlyProps;

    return <>
        {
            description
            ? <>
                <h2>{ title }</h2>
                <span className={styleCSS.description}>{ description }</span>
        
            </>
            : <>
                <h2 className={styleCSS.h2}>{ title }</h2>
            </>
        }
    </>;
};