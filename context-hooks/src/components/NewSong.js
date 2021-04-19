import React, { useState } from 'react';

const NewSong = ({ addSong }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Song name </label>
            <input type="text" required="requried" 
            onChange={(e) => {setTitle(e.target.value)}}
            value={title}/>
            <input type="submit" value="add song"/>
        </form>
    )
}

export default NewSong;