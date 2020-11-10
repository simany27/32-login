import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {profilePage, startPage} from "../utils/Constants";

const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='m-2'>
            <div>
                <span className='mx-1'>Login:</span>
                <input
                    onChange={(event) => setLogin(event.target.value)}
                    type='text'
                    placeholder='login'/>
                <span className='mx-1'>Password:</span>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type='text'
                    placeholder='password'/>
            </div>
            <div>
                <Link to={`/${profilePage}`}
                    onClick={() => props.putLogin(login, password)}
                    className='btn btn-outline-secondary mx-3 my-3'>Login
                </Link>
                <Link to={`/${startPage}`}
                      onClick={() => {
                          setLogin('');
                          setPassword('');
                      }}
                      className='btn btn-outline-secondary mx-3 my-3'>Reset</Link>
            </div>
        </div>
    )
};

export default Login;