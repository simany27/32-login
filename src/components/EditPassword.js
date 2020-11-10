import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {profilePage} from "../utils/Constants";

const EditPassword = (props) => {
    const [newPassword, setNewPassword] = useState('');

    return (
        <div className='m-2'>
            <h1>Edit Password</h1>
            <div className='my-2'>
                <span className='mx-1'>New password:</span>
                <input
                    onChange={(event) => setNewPassword(event.target.value)}
                    type='text'
                    placeholder='new password'/>
            </div>
            <div>
                <Link to={`/${profilePage}`}
                      onClick={() => props.editPassword(props.login, props.password, newPassword)}
                      className='btn btn-outline-secondary mx-3 my-3'>Save</Link>
            </div>
        </div>
    );
};

export default EditPassword;