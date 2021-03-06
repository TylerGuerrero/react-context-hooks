import uuid from 'uuid/v4';

// state object get binded from useReducer
// action object gets binded from the dispath method
export const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }]
        case 'REMOVE_BOOK':
            return state.filter((book) => book.id !== action.book.id)
        default:
            return state
    }
}