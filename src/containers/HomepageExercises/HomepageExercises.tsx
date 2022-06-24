// libs
import React, { useState, Fragment } from "react";

// styles
import styleCSS from "./styles.scss";

// components
import { Portal } from "@components/Portal";
import { Modal, Designes } from "@components/Modal";

// interfaces
import { IReadonlyProps, IExercisesItem } from "./type";

export const HomepageExercises: React.FC<IReadonlyProps> = (readonlyProps): React.ReactElement => {
    const {
        methodMgTest,
    } = readonlyProps;

    const [iShowModalIndexState, iShowModalIndexHandler] = useState<number>(-1);
    
    const aItem = methodMgTest?.data?.sort(({ order: a }, { order: b }) => a - b);

    const onClick = ({ index }: { index: number }) => {
        iShowModalIndexHandler(index);
    };

    const exercisesItem = ({ title, small_image, large_image, steps }: IExercisesItem, index: number): React.ReactFragment => (
        <Fragment key={index}>
            <button type="button" className={styleCSS.exercisesItem} onClick={onClick.bind(null, { index })}>
                <img src={small_image} alt={title}/>
                <span>{ title }</span>
            </button>
            {
                iShowModalIndexState === index
                && (
                    <Portal>
                        <Modal onClickClose={onClick.bind(null, { index: -1 })}>
                            <Designes.Popup1 {...{ title, large_image, steps }}/>
                        </Modal>
                    </Portal>
                )
            }
        </Fragment>
    );

    return <>{ aItem?.map(exercisesItem) || null }</>;
};