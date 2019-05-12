export const ADD_DECK = 'decks/ADD_DECK'

const addDeckAction = (title) => ({
    type: ADD_DECK,
    payload: {
        title
    }
})

export const addDeck = ({title}) => (dispatch) => (
    dispatch(addDeckAction(title))
)

export const addCard = (card) => (dispatch) => {

}

export const removeDeck = ({id}) => (dispatch) => {

}
