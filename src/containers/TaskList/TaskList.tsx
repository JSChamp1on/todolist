// libs
import React, { useCallback } from "react";

// interfaces
import { IPropsTaskList, IItemTaskList } from "./type";

export const TaskList: React.FC<IPropsTaskList> = (readonlyProps): React.ReactElement => {
    const {
        todoList,
        dispatchTodoListSplice,
    } = readonlyProps;

    const onClick = useCallback((index: number) => () => {
        dispatchTodoListSplice({ index });
    }, []);

    if (!todoList.length) {
        return (
            <div>
                <h3>В настоящий момент задач нет</h3>
            </div>
        );
    }

    return (
        <div className="uk-flex uk-flex-column">
            {
                todoList.map((item: IItemTaskList, index: number) => {
                    let className: string = 'uk-card uk-card-default uk-card-body';

                    if (index) {
                        className += ' uk-margin-top';
                    }

                    return (
                        <div key={index} className={className}>
                            <span>Задача: { item.task }</span>
                            <br /><span>Статус: { item.status }</span>
                            <br /><button type="button" className="uk-button uk-button-default" onClick={onClick(index)}>Удалить</button>
                        </div>
                    );
                })
            }
        </div>
    );
};
