export const ADD_DECK = 'decks/ADD_DECK'

const addDeckAction = (title) => ({
    type: ADD_DECK,
    payload: {
        title
    }
})

export const addDeck = ({title}) => (dispatch) => {
    console.log('Dispatching addDeck action...')

    return dispatch(addDeckAction(title))
}

export const addCard = (card) => (dispatch) => {

}

export const removeDeck = ({id}) => (dispatch) => {

}
