import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { GET_USERDATA, SET_USERDATA } from "../redux/actions/Actions";


function* workerGetUser() {
    console.log("received data");
    const uri = "https://jsonplaceholder.typicode.com/users";
    const result = yield call(Axios.get, uri);
    yield put({ type: SET_USERDATA, value: result.data });
}

export function* watcherGetUsers() {
    console.log('reached watcher');
  yield takeEvery(GET_USERDATA, workerGetUser);
}