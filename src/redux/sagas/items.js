import {GET_DATA} from "../constants";
import {takeEvery, call, put} from "redux-saga/effects";
import {getData} from "../../api";
import {setData, setError, setLoading} from "../actions/items";


export function* getItems() {
    yield put(setLoading(true));
    try {
        const res = yield call(getData);
        yield put(setData(res.data));
    } catch (e) {
        yield put(setError(e.message));
    }
    yield put(setLoading(false));
}

export function* watcherGetItems() {
    yield takeEvery(GET_DATA, getItems)
}