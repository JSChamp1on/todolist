// libs
import React from "react";
<<<<<<< HEAD
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
=======
import { createStore, applyMiddleware } from "redux";
>>>>>>> 08953d48cabb3e9b7848039bfa10ca6a9aa752f7
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

// redux
<<<<<<< HEAD
import { reducers } from "@redux";

const withReduxDevtools = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = withReduxDevtools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
=======
import { combineReducers } from "@redux";
import { rootSaga } from "@redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(combineReducers, applyMiddleware(saga));
saga.run(rootSaga);
>>>>>>> 08953d48cabb3e9b7848039bfa10ca6a9aa752f7

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(combineReducers(reducers), enhancer);

export const Redux = (readonlyProps) => <Provider store={store} {...readonlyProps}/>;