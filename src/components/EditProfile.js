import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {profilePage} from "../utils/Constants";

const EditProfile = (props) => {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);

    return (
        <div className='m-2'>
            <h1>Edit Profile</h1>
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
                      onClick={() => props.editProfile(props.login, props.password, firstName, lastName)}
                      className='btn btn-outline-secondary mx-3 my-3'>Save</Link>
            </div>
        </div>
    );
};

export default EditProfile;