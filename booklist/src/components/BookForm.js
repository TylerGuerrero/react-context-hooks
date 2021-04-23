import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {    
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title: title,
            author: author
        }});
        
        setTitle("");
        setAuthor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="book title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required="required" />

            <input type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            placeholder="author title"
            required="required"/>

            <input type="submit" value="AddBook"/>
        </form>
    )
}  

export default BookForm;