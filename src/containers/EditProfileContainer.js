import {bindActionCreators} from "redux";
import {editProfileAction,} from "../actions/AccountingActions";
import {connect} from "react-redux";
import EditProfile from "../components/EditProfile";

function mapStateToProps(state){
    return {
        login: state.login,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editProfile: editProfileAction
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);