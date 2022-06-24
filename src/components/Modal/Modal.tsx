// libs
import React, { useRef } from "react";

// styles
import stylesCSS from "./styles.scss";

// images
import closeSVG from "@images/close.svg";

// interfaces
import { IReadonlyProps } from "./type";

export const Modal: React.FC<IReadonlyProps> = (readonlyProps): React.ReactElement => {
    const {
        onClickClose,
        children,
    } = readonlyProps;

    const closeArea = useRef<null | HTMLDivElement>(null);

    const onClickArea: React.MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent): void => {
        if (closeArea.current === event.target) {
            onClickClose(event);
        }
    };

    return (
        <div ref={closeArea} className={stylesCSS.blur} onClick={onClickArea}>
            <div className={stylesCSS.modal}>
                { children }
                <button type="button" className={stylesCSS.close} onClick={onClickClose}>
                    <img src={closeSVG} alt="Close"/>
                </button>
            </div>
        </div>
    );
};