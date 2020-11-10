import {bindActionCreators} from "redux";
import {putLoginAction} from "../actions/AccountingActions";
import Login from "../components/Login";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        putLogin: putLoginAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)

