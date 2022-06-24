// libs
import React, { Fragment, useCallback, useEffect, useRef } from "react";

// interfaces
import { IPropsAddTask } from "./type";

export const AddTask: React.FC<IPropsAddTask> = (readonlyProps): React.ReactElement => {
    const {
        errorsTodoList,
        dispatchTodoListPush,
    } = readonlyProps;

    const formElement = useRef(null);

    // ловлю ошибки с тем, чтобы решить, очистить форму или нет
    // после диспатча ошибок, этот компонент проходит жизненный цикл, поэтому считаю так написать вполне допустимо
    useEffect(() => {
        const target: any = formElement.current;

        if (!errorsTodoList?.length) {
            target.reset();
        }
    }, [errorsTodoList]);

    // отправляю форму в бизнес логику
    const onSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        const target: any = e.target;

        const formData: FormData = new FormData(target);

        dispatchTodoListPush({
            formData,
        });
    }, []);

    return (
        <form ref={formElement} onSubmit={onSubmit}>
            <fieldset className="uk-fieldset">
                <legend className="uk-legend">Добавить задачу</legend>

                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label>
                        Название: 
                        <br /><input className="uk-input" type="text" name="task" />
                    </label>
                </div>

                <div className="uk-margin">
                    Cтатус: 
                    <br /><select className="uk-select" name="status">
                        <option>готово к решению</option>
                        <option>выполнено</option>
                    </select>
                </div>

                <div className="uk-margin">
                    <button className="uk-button uk-button-default">Создать</button>
                </div>

                {
                    errorsTodoList?.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <br />
                                <span>{ item }</span>
                            </Fragment>
                        );
                    })
                }
            </fieldset>
        </form>
    );
};