// libs
import React from "react";

// containers
import { AddTask } from "@containers/AddTask";
import { TaskList } from "@containers/TaskList";

// styles
import styles from "./homepage.scss";

export const Homepage: React.FC = (): React.ReactElement => {
    return (
        <div className={styles.wrapper}>
            <h2>Todo list</h2>
            <AddTask />
            <TaskList />
        </div>
    );
};
