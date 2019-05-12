import {connect} from 'react-redux'

import {CreateDeck} from '../../components/CreateDeck'
import {addDeck} from '../actions/decks'

const mapStateToProps = undefined

const mapDispatchToProps = () => ({
    addDeck
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,    
)(CreateDeck)