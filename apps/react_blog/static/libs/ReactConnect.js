import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const connectReact = function(component, actions = {}, mapStateToProps = null, mapDispatchToProps = null) {
    mapStateToProps = mapStateToProps || function (state) {
        return state
    };

    mapDispatchToProps = mapDispatchToProps || function (dispatch) {
        return {actions: bindActionCreators(actions, dispatch)}
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(component)
};

export default connectReact