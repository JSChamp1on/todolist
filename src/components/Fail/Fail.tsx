// libs
import React, { useState } from "react";

// components
import { Portal } from "@components/Portal";
import { Modal } from "@components/Modal";

// interfaces
import { IReadonlyProps } from "./type";

export const Fail: React.FC<IReadonlyProps> = ({ payload }) => {
    const [bShowModalState, bShowModalHandler] = useState<boolean>(Boolean(!payload?.fail));

    if (!payload?.fail || !bShowModalState) {
        return null;
    }
    
    return (
        <Portal>
            <Modal onClickClose={bShowModalHandler.bind(null, false)}>
                <h1>{ payload.fail.statusText}</h1>
                {
                    payload.fail.status
                    && <span>Code: { payload.fail.status }</span>
                }
            </Modal>
        </Portal>
    );
};