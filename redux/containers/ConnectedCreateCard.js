import {connect} from 'react-redux'

import {CreateCard} from '../../components/CreateCard'
import {addDeck} from '../actions/decks'

const mapStateToProps = undefined

const mapDispatchToProps = {
    addDeck
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,    
)(CreateCard)