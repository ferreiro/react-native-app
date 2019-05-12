import {connect} from 'react-redux'

import {DeckDetails} from '../../components/DeckDetails'

const DEFAULT_DECK_DETAILS_TITLE = 'Deck details'

const mapStateToProps = (state, {navigation}) => {
    // NB: Alternative syntax: const {id} = navigation.state.params;
    const id = navigation.getParam('id', DEFAULT_DECK_DETAILS_TITLE)

    return {
        id,
        deck: state.decks[id]
    };
  }

  
// const mapStateToProps = (state, ownProps) => {
//     // console.log('ownProps')
//     // console.log(ownProps)

//     // const {navigation} = ownProps;
//     // console.log('navigation')
//     // console.log(navigation)
//     // const id = '23'
//     // const { id } = navigation.state.params;

//     return {
//         deck: {},
//     }
// }
const mapDispatchToProps = undefined

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeckDetails)