import {    EDIT_PASSWORD,    GET_LOGIN,    GET_PASSWORD, REQUEST, REGISTER,  LOGOUT, EDIT_PROFILE} from "../actions/AccountingActions";


export const accountingReducer = (state, action) => {
    switch (action.type) {
        case GET_LOGIN:
            return {...state, login: action.payload1.login, firstName: action.payload1.firstName,
                lastName: action.payload1.lastName, password: action.payload2};
        case GET_PASSWORD:
            return {...state, password: action.payload};
        case EDIT_PROFILE:
            return {...state, firstName: action.payload.firstName, lastName: action.payload.lastName};
        case EDIT_PASSWORD:
            return {...state, password: action.payload};
        case REGISTER:
            return {...state, login: action.payload.login, firstName: action.payload.firstName,
                lastName: action.payload.lastName, password: action.payload.password};
        case LOGOUT:
            return {...state, login: action.payload, firstName: action.payload,
                lastName: action.payload, password: action.payload};
        case REQUEST:
            return {...state, firstName: action.payload, lastName: action.payload};
    }
}