// redux
import { constants } from "@redux";

// constants
const {
    ERRORS,
    TODO_LIST,
} = constants;

// Тут какая-та бизнес логика 

export const todoListPush = (obj: any) => (dispatch: Function, getState: Function) => {
    const state = getState();

    const {
        errors,
        todoList,
    } = state;

    const {
        formData,
    } = obj;

    // готовлюсь к сбору ошибок
    // при втором высове экшена todoListPush очищаю ошибки с тем, чтобы проверить форму повторно 
    errors.todoList = [];


    // извлекаю данные из формы
    const task: string = formData.get('task') ?? '';
    const status: string = formData.get('status') ?? '';


    if (!/^.{2,10}$/.test(task)) {
        // если сайт интернациональный, то вместо текста пишем ключ на перевод
        // перевод должен происходить строго в рендере иначе при переключении этот текст переведен не будет
        errors.todoList.push('Вы не заполнили поле название, от 2-х до 10-и символов');
    }
    // ... 
    // тут скопом продолжают собираться ошибки юзера


    // проверяю, были ли ошибки
    if (errors.todoList.length) {
        // если ошибки были, диспатчу их

        const payload = {
            ...errors,
            todoList: errors.todoList,
        };

        dispatch({ type: ERRORS, payload });
    } else {
        // если ошибок нет, диспатчу TODO_LIST

        // менять текущий стэйт плохой тон, поэтому делаю поверхностное копирование
        const payload = [...todoList];

        payload.push({
            task,
            status,
        });

        dispatch({ type: TODO_LIST, payload });
    }
};

export const todoListSplice = (obj: any) => (dispatch: Function, getState: Function) => {
    const state = getState();

    const {
        todoList,
    } = state;

    const {
        index,
    } = obj;

    const payload = [...todoList];

    payload.splice(index, 1);

    dispatch({ type: TODO_LIST, payload });
};
