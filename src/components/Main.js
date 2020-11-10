import React from 'react';
import {Switch, Route} from "react-router-dom";
import Start from "../containers/StartContainer";
import {editProfile, editPassword, loginPage, profilePage, registerPage, startPage} from "../utils/Constants";
import Login from "../containers/LoginContainer";
import Profile from "../containers/ProfileContainer";
import Register from "../containers/RegisterContainer";
import EditProfile from "../containers/EditProfileContainer";
import EditPassword from "../containers/EditPasswordContainer";

const Main = () => {
    return (
        <Switch>
            <Route path={['/', `/${startPage}`]} exact><Start/></Route>
            <Route path={`/${loginPage}`} exact><Login/></Route>
            <Route path={`/${profilePage}`} exact><Profile/></Route>
            <Route path={`/${registerPage}`} exact><Register/></Route>
            <Route path={`/${editProfile}`} exact><EditProfile/></Route>
            <Route path={`/${editPassword}`} exact><EditPassword/></Route>
        </Switch>
    );
};

export default Main;