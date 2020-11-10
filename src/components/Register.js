import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {profilePage, startPage} from "../utils/Constants";

const Register = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div className='m-2'>
            <h1>Registration</h1>
            <div className='my-2'>
                <span className='mx-1'>Login:</span>
                <input
                    onChange={(event) => setLogin(event.target.value)}
                    type='text'
                    placeholder='login'/>
            </div>
            <div className='my-2'>
                <span className='mx-1'>Password:</span>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type='text'
                    placeholder='password'/>
            </div>
            <div className='my-2'>
                <span className='mx-1'>First name:</span>
                <input
                    onChange={(event) => setFirstName(event.target.value)}
                    type='text'
                    placeholder='name'/>
            </div>
            <div className='my-2'>
                <span className='mx-1'>Last name:</span>
                <input
                    onChange={(event) => setLastName(event.target.value)}
                    type='text'
                    placeholder='last name'/>
            </div>
            <div>
                <Link to={`/${profilePage}`}
                      onClick={() => props.register(login,password,firstName,lastName)}
                      className='btn btn-outline-secondary mx-3 my-3'>Register</Link>
                <Link to={`/${startPage}`}
                      onClick={() => {
                          setLogin('');
                          setPassword('');
                      }}
                      className='btn btn-outline-secondary mx-3 my-3'>Reset</Link>
            </div>
        </div>
    );
};

export default Register;