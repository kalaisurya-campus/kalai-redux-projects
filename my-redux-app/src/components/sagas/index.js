import { watcherGetUsers } from "./users";
import { fork, all, takeLatest } from "redux-saga/effects";

export default function* () {
  // console.log("in watcher");
  yield all([fork(watcherGetUsers)]);
}
