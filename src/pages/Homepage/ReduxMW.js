// libs
import { connect } from "react-redux";

// redux
import { actionMgTest } from '@redux/actions/actionMgTest';

const
    mapStateToProps = state => ({
        methodMgTest: state.methodMgTest,
    }), 
    mapDispatchToProps = dispatch => ({
        actionMgTest: function () {
            // saga
            dispatch({ type: 'RUN' });

            // thank
            // if (this.methodMgTest === null) {
            //     dispatch(actionMgTest());
            // }
        },
    });

export const ReduxMW = (Conponent) => connect(mapStateToProps, mapDispatchToProps)(Conponent);