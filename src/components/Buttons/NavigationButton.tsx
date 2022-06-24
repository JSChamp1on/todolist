// libs
import React from "react";

// styles
import stylesCSS from "./styles.scss";

interface IReadonlyProps {
    imgUrl: string;
    label: string;
    bactive: number;
};

export const NavigationButton: React.FC<IReadonlyProps> = ({ imgUrl, label, bactive }): React.ReactElement => {
    const jImg: object = {
        width: 20,
        height: 20,
        backgroundColor: bactive ? '#161616' : '#8D8D9C',
        mask: `url(${imgUrl}) no-repeat center`,
        WebkitMask: `url(${imgUrl}) no-repeat center`,
    };

    return (
        <button type="button" className={[stylesCSS.navigationButton, bactive ? stylesCSS.active : ''].join(' ')}>
            <div style={jImg}/>
            <span>{ label }</span>
        </button>
    );
};