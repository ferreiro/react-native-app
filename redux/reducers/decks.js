import {merge} from 'lodash'
import {ADD_DECK} from "../actions/decks";
import timestamp from 'time-stamp'

// const initialState = []
const initialState = [
    {
        id: 'mySuperDeck',
        title: 'My super title',
        items: [
            {
                question: '1: What is your name?',
                answer: 'This is the answer',
            }
        ],
    },
    {
        id: 'mySuperDeck2',
        title: 'My super title',
        items: [
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
]

export const decks = (state = initialState, action) => {
    const {type, payload} = action;

    console.log('decks reducer')

    if (type === ADD_DECK) {
        const newDeck = {
            title: payload.title,
            id: timestamp.utc('YYYYMMDDmmssms'),
            items: [],
        }

        console.log('ADD_DECK', ADD_DECK)

        return [newDeck, ...state]
    }
    
    return state
}