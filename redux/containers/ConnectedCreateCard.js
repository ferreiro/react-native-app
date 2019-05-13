import {connect} from 'react-redux'

import {CreateCard} from '../../components/CreateCard'
import {addCard} from '../actions/decks'

const mapStateToProps = undefined

const mapDispatchToProps = {
    addCard
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,    
)(CreateCard)