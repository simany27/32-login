import {bindActionCreators} from "redux";
import {putLoginAction} from "../actions/AccountingActions";
import {connect} from "react-redux";
import Start from "../components/Start";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        putLogin: putLoginAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Start)