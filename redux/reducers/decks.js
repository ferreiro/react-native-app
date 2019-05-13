import {merge, pickBy, isEmpty} from 'lodash'
import {ADD_DECK, REMOVE_DECK, ADD_CARD} from "../actions/decks";
import timestamp from 'time-stamp'

// const initialState = []
const initialState = {
    'mySuperDeck': {
        id: 'mySuperDeck',
        title: 'My super title',
        cards: [
            {
                question: '1: What is your name?',
                answer: 'This is the answer',
            }
        ],
    },
    'mySuperDeck2': {
        id: 'mySuperDeck2',
        title: 'My super title',
        cards: [
            {
                id: '232323',
                question: '1: What is your name?',
                answer: 'This is the answer',
            },
            {
                id: '232323244',
                question: '1: What is your name?',
                answer: 'This is the answer',
            }
        ],
    },
}

export const decks = (state = initialState, action) => {
    const {type, payload} = action;

    if (type === ADD_DECK) {
        const newDeck = {
            title: payload.title,
            id: timestamp.utc('YYYYMMDDmmssms'),
            cards: [],
        }

        return merge({}, state, {[newDeck.id]: newDeck})
    } else if (type === ADD_CARD) {
        const {deckId, answer, question} = payload

        // NB: Skip if Deck id does not exist
        if (isEmpty(state[deckId])) {
            return state;
        }

        const updatedDeck = state[deckId];
        updatedDeck.cards.push({
            id: timestamp.utc('YYYYMMDDmmssms'),
            question,
            answer,
        })

        return merge({}, state, {
            [deckId]: updatedDeck
        })
    } else if (type === REMOVE_DECK) {
        const {id} = payload
        const removeDeckById = (item) => {
            return item.id !== id
        }

        return pickBy(state, removeDeckById);
    }
    
    return state
}