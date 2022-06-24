// libs
import React from "react";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// redux
import { reducers } from "@redux";

const withReduxDevtools = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = withReduxDevtools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(combineReducers(reducers), enhancer);

export const Redux = (readonlyProps) => <Provider store={store} {...readonlyProps}/>;