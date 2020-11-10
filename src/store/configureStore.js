import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {accountingReducer} from "../reducers/accountingReducer";

const initialState = {
    login: '',
    password: '',
    firstName: '',
    lastName: ''
}

export const store = createStore(accountingReducer, initialState, applyMiddleware(thunk))