// libs
import { connect } from "react-redux";

// redux
import { todoListSplice } from "@redux/actions/todoList";

// components
import { TaskList as TaskList_ } from "./TaskList";

export * from "./type";
export const TaskList = ((Conponent) => {
    const
        mapStateToProps = (state: any) => ({
            todoList: state.todoList,
        }),
        mapDispatchToProps = (dispatch: Function) => ({
            dispatchTodoListSplice: (obj: any) => {
                dispatch(todoListSplice(obj));
            },
        });

    return connect(mapStateToProps, mapDispatchToProps)(Conponent);
})(TaskList_);
