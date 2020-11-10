import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Register from "../components/Register";
import {registerAction} from "../actions/AccountingActions";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        register: registerAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register)