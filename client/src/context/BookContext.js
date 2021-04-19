import React, { createContext, useState } from 'react';
import uuid from 'uuid/v4';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'almost name of the wind', id: 1},
        { title: 'the way of the kings', id: 2},
        { title: 'the final empire', id: 3},
        { title: 'the hero of ages', id: 4}
    ]);

    const addBook = (title) => {
        setBooks([...books, { title: title, id: uuid()}])
    }

    return (
        // wrapper for components, this will give the components access
        // to the global state
        // props.children places the components in the context
        <BookContext.Provider value={{books}}>
                {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;