import React, {useEffect, useState} from 'react';
import {loginPage, profilePage, registerPage} from "../utils/Constants";
import {Link, Redirect} from "react-router-dom";

const Start = (props) => {

    if (localStorage.key(0)) {
        let login = localStorage.key(0);
        let password = localStorage.getItem(login);
        props.putLogin(login, password);
        return <Redirect to={`/${profilePage}`}/>
    } else {
        return (
            <div>
                <Link to={`/${loginPage}`} className='btn btn-outline-secondary mx-3 my-3'>Login</Link>
                <Link to={`/${registerPage}`} className='btn btn-outline-secondary mx-3 my-3'>Register</Link>
            </div>
        )
    }

};

export default Start;