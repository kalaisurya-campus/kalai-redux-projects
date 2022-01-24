import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducer";
import reduxsaga from "redux-saga";
import rootsagadata from "../../sagas";
const reduxSagaMiddleWare = reduxsaga();
const store = createStore(rootReducer, applyMiddleware(reduxSagaMiddleWare));
reduxSagaMiddleWare.run(rootsagadata);
export default store;
