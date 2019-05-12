import {merge} from 'lodash'
import {ADD_DECK} from "../actions/decks";

const initialState = []
// const initialState = [
//     {
//         id: 'mySuperDeck',
//         title: '1: My super title',
//         items: [
//             {
//                 question: '1: What is your name?',
//                 answer: 'This is the answer',
//             }
//         ],
//     },
//     {
//         id: 'mySuperDeck2',
//         title: '2: My super title',
//         items: [
//             {
//                 id: '232323',
//                 question: '1: What is your name?',
//                 answer: 'This is the answer',
//             },
//             {
//                 id: '232323244',
//                 question: '1: What is your name?',
//                 answer: 'This is the answer',
//             }
//         ],
//     },
// ]

export const decks = (state = initialState, action) => {
    const {type, payload} = action;

    console.log('decks reducer')

    if (type === ADD_DECK) {
        console.log('ADD_DECK', ADD_DECK)
        return merge({}, state, {
            title: payload.title,
            id: new Date(),
            items: [],
        })
    } else {
        return state
    }
}