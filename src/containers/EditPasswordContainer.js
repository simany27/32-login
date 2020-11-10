import {bindActionCreators} from "redux";
import {editPasswordAction} from "../actions/AccountingActions";
import {connect} from "react-redux";
import EditPassword from "../components/EditPassword";


function mapStateToProps(state){
    return {
        login: state.login,
        password: state.password
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editPassword: editPasswordAction
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPassword);