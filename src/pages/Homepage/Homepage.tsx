// libs
<<<<<<< HEAD
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
=======
import React, { useEffect } from "react";

// styles
import stylesCSS from "./styles.scss";

// components
import { ContentHeader } from "@components/ContentHeader";
import { Spinner } from "@components/Spinner";
import { Fail } from "@components/Fail";

// containers
import { NavigationPanel } from "@containers/NavigationPanel";
import { ContentArea } from "@containers/ContentArea/ContentArea";
import { HomepageExercises } from "@containers/HomepageExercises";

// interfaces
import { IReadonlyProps } from "./type";

export const Homepage: React.FC<IReadonlyProps> = (readonlyProps): React.ReactElement => {
    useEffect(() => {
        readonlyProps.actionMgTest.call(readonlyProps);
    }, []);

    return (
        <div className={stylesCSS.wrapper}>
            <NavigationPanel className={stylesCSS.navigationPanel}/>
            <ContentArea className={stylesCSS.contentArea}>
                <ContentHeader title="Exercises" description="Strengthen respiratory system"/>
                <HomepageExercises/>
                <Spinner payload={readonlyProps.methodMgTest}/>
                <Fail payload={readonlyProps.methodMgTest}/>
            </ContentArea>
        </div>
    );
};
>>>>>>> 08953d48cabb3e9b7848039bfa10ca6a9aa752f7
