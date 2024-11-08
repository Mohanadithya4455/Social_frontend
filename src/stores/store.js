import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducers, reducers } from "../reducers/auth.reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    auth: authReducers,
  });
  


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
