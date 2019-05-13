import {connect} from 'react-redux'

import {Quiz} from '../../components/Quiz'

const mapStateToProps = (_, ownProps) => {
    const {navigation} = ownProps;
    const deck = navigation.getParam('deck', {})

    return {
        deck
    };
}

const mapDispatchToProps = undefined

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Quiz)