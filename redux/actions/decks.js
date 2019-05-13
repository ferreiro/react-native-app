export const ADD_DECK = 'decks/ADD_DECK'
export const ADD_CARD = 'decks/ADD_CARD'
export const REMOVE_DECK = 'decks/REMOVE_DECK'

const addDeckAction = (title) => ({
    type: ADD_DECK,
    payload: {
        title
    }
})

const addCardAction = (deckId, question, answer) => ({
    type: ADD_CARD,
    payload: {
        deckId,
        question,
        answer
    }
})
const removeDeckAction = (id) => ({
    type: REMOVE_DECK,
    payload: {
        id
    }
})

export const addDeck = ({title}) => (dispatch) => (
    dispatch(addDeckAction(title))
)

export const removeDeck = ({id}) => (dispatch) => (
    dispatch(removeDeckAction(id))
)

export const addCard = ({deckId, question, answer}) => (dispatch) => {
    dispatch(addCardAction(deckId, question, answer))
}
