import {connect} from 'react-redux'

import {Dashboard} from '../../components/Dashboard'
import {addDeck} from '../actions/decks'

const mapStateToProps = (state) => ({
    decks: state.decks
})

const mapDispatchToProps = undefined

export default connect(
    mapStateToProps,
    mapDispatchToProps,    
)(Dashboard)