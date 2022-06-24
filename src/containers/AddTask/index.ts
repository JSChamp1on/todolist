// libs
import React, { Dispatch } from "react";
import { connect } from "react-redux";

// redux
import { todoListPush } from "@redux/actions/todoList";

// components
import { AddTask as AddTask_ } from "./AddTask";

export * from "./type";
export const AddTask = ((Conponent) => {
    const
        mapStateToProps = (state: any) => ({
            errorsTodoList: state.errors.todoList,
            todoList: state.todoList,
        }), 
        mapDispatchToProps = (dispatch: Function) => ({
            dispatchTodoListPush: (obj: any) => {
                dispatch(todoListPush(obj));
            },
        });

    return connect(mapStateToProps, mapDispatchToProps)(AddTask_);
})();
