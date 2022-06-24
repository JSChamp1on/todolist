// redux
import { constants } from "@redux";

// constants
const {
    ERRORS,
    TODO_LIST,
} = constants;

const 
    ERR = {},
    ARR = [];

// Бизнес логику внутри конструкции switch case писать не очень удобно, поэтому я ее по максимум перенашу в танки
// Но и в редьюсерах можно все писать

export const errors = (state = ERR, action) => {
    switch (action.type) {
        case ERRORS:
            return action.payload;
        default:
            return state;
    }
};

export const todoList = (state = ARR, action) => {
    switch (action.type) {
        case TODO_LIST:
            return action.payload;
        default:
            return state;
    }
};
