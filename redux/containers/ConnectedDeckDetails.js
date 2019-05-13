import {connect} from 'react-redux'

import {DeckDetails} from '../../components/DeckDetails'
import {removeDeck} from '../actions/decks'

const DEFAULT_DECK_DETAILS_TITLE = 'Deck details'

const mapStateToProps = (state, ownProps) => {
    const {navigation} = ownProps;
    // NB: Alternative syntax: const {id} = navigation.state.params;
    const id = navigation.getParam('id', DEFAULT_DECK_DETAILS_TITLE)

    return {
        id,
        deck: state.decks[id]
    };
}

const mapDispatchToProps = {
    removeDeck,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeckDetails)