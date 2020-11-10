import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {editProfile, editPassword, startPage} from "../utils/Constants";

const Profile = (props) => {

    if (!localStorage.key(0)) {
        return <Redirect to={`/${startPage}`}/>
    } else {
        return (
            <div className='m-2'>
                <h1>Profile</h1>
                <div className='my-2'>
                    <span className='mx-1'>First name: {props.firstName}</span>
                </div>
                <div className='my-2'>
                    <span className='mx-1'>Last name: {props.lastName}</span>
                </div>
                <div>
                    <Link to={`/${editProfile}`} className='btn btn-outline-secondary mx-3 my-3'>Edit Profile</Link>
                    <Link to={`/${editPassword}`} className='btn btn-outline-secondary mx-3 my-3'>Edit Password</Link>
                    <Link to={`/${startPage}`}
                          onClick={() => props.logout}
                          onClick={() => localStorage.clear()}
                          className='btn btn-outline-secondary mx-3 my-3'>Logout</Link>
                </div>
            </div>
        );
    }
};

export default Profile;