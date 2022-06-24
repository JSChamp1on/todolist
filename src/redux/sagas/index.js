// libs
import {
    take, // ждать выполнение какого либо действия
    takeEvery, // тоже самое что take, но с последующем вызовом worker'а (типа декларативно)
    takeLatest, // тоже самое что takeEvery, но вызовет только послеюнюю функцию которую туда передали
    takeLeading, // тоже самое что takeLatest, только наоборот
    put, // аналог dispatch

} from "redux-saga/effects";

// redux
import { constants } from "@redux";

// constants
const {
    METHOD_MGTEST,
} = constants;

const URL = `${env.API_LINK}/api/MG_test`;

// class FetchTest {
//     constructor() {
//         this.successCallback = null;
//     }
//
//     static singleton(instance) {
//         if (instance === null) {
//             instance = new this;
//         }
//
//         return instance;
//     }
//
//     async fetch() {
//         const res = await fetch(URL);
//
//         const data = await res.json();
//
//         const payload = { type: METHOD_MGTEST, payload: { data, fail: null, loading: true } };
//
//         this.success?.(payload);
//     }
//
//     set success(callback) {
//         this.successCallback = callback;
//     }
//
//     get success() {
//         return this.successCallback;
//     }
// }
//
// let instance = null;
// const fetchTest = FetchTest.singleton(instance);
// fetchTest.success = (payload) => {
//     put(payload);
// };


async function mgTest () {
    // return await fetchTest.fetch();
    const res = await fetch(URL);

    const data = await res.json();

    return data;
}

export function* workerSaga() {
    // yield mgTest();

    yield put({ type: METHOD_MGTEST, payload: { data: null, fail: null, loading: true } })

    const data = yield mgTest();

    yield put({ type: METHOD_MGTEST, payload: { data, fail: null, loading: false } });
}

export function* watchClickSaga() {
    yield takeEvery('RUN', workerSaga);
}

export function* rootSaga() {
    yield watchClickSaga();
}