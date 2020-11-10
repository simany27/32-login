import Profile from "../components/Profile";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logoutAction} from "../actions/AccountingActions";
import {Redirect} from "react-router-dom";
import {startPage} from "../utils/Constants";


function mapStateToProps(state) {
    if(!localStorage.key(0)){
        return <Redirect to={`/${startPage}`}/>
    }else{
        return {
            firstName: state.firstName,
            lastName: state.lastName
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: logoutAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);