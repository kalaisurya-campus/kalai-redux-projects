import { combineReducers } from "redux";
import { pushDataMethod } from "./Pushdatas";
import { reducerData } from './Reducers';
import { setUserData } from "./setuserdata";


const rootReducer=combineReducers(
    {
        count:reducerData,
        pushdatavalue:pushDataMethod,
        setusers:setUserData,
    }
)

export default rootReducer;