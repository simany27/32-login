import {base_url, startPage} from "../utils/Constants";

export const GET_LOGIN = 'GET_LOGIN';
export const GET_PASSWORD = 'GET_PASSWORD';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDIT_PASSWORD = 'EDIT_PASSWORD';
export const REQUEST = 'REQUEST';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';

export const getLogin = (user,password) => ({
    type: GET_LOGIN,
    payload1: user,
    payload2: password
})

export const getPassword = password => ({
    type: GET_PASSWORD,
    payload: password
})

export const getRegister = user => ({
    type: REGISTER,
    payload: user
})

export const logoutAction = () => ({
    type: LOGOUT,
    payload: ''
})

export const editProfile = user => ({
    type: EDIT_PROFILE,
    payload: user
})

export const editPassword = password => ({
    type: EDIT_PASSWORD,
    payload: password
})

export const loadingAction = () => ({
    type: REQUEST,
    payload: 'pending...'
})

export const editPasswordAction = (login,password,newPassword) => {
    return dispatch => {
        fetch(`${base_url}/account/user/password`, {
            method: 'PUT',
            headers: {
                'Authorization': `Basic ${btoa(login + ':' + password)}`,
                'X-Password': newPassword,
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('Password changed');
                    localStorage.setItem(login, newPassword);
                } else {
                    throw new Error('' + response.status);
                }
            })
            .catch(e => console.log(e.message));

    }
}

export const editProfileAction = (login,password,firstName,lastName) => {
    return dispatch => {
        dispatch(loadingAction());
        const user = {
            "firstName": firstName,
            "lastName": lastName
        }
        fetch(`${base_url}/account/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${btoa(login + ':' + password)}`
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(user => dispatch(editProfile(user)))
            .catch(e => console.log(e.message));
    }
}

export const registerAction = (login, password, firstName, lastName) => {
    return dispatch => {
        dispatch(loadingAction());
        const user = {
            "firstName": firstName,
            "lastName": lastName,
            "login": login,
            "password": password,
        }
        fetch(`${base_url}/account/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(user => dispatch(getRegister(user)))
            .catch(e => console.log(e.message));
        localStorage.setItem(login, password);
    }
}

export const putLoginAction = (login, password) => {
    return dispatch => {
        dispatch(loadingAction());
        fetch(`${base_url}/account/login`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(login + ':' + password)}`
            }
        }).then(response => {
            if (response.ok) {
                localStorage.setItem(login, password);
                return response.json();
            } else {
                throw new Error('' + response.status);
            }
        })
            .then(user => {
                dispatch(getLogin(user,password));
            })
            .catch(e => console.log(e.message));
        ;
    }
}

