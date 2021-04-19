import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSong from './NewSong';

const SongList = () => {

   const [songs, setSongs] = useState([
        { title: 'almost here', id: 1},
        { title: 'memory gospel', id: 2},
        { title: 'this wild darkness', id: 3}
    ]);

    const [age, setAge] = useState(20);

    const addSong = (title) => {
        // will replace the whole value
        // spread operator makes a copy of the object
        setSongs([...songs, {title: title, id: uuid()}])
    }

    // runs every time the component is render or re-rendered
    // only will run if songs is different
    useEffect(() => {
        console.log('useEffect hook ran', songs);
    }, [songs]);

    // will only run of age is different
    useEffect(() => {
        console.log('useEffect hook ran', age)
    }, [age]);

    return (
        <div className="song-list">
            <ul>
                {songs.map((song) => {
                    return(
                        <li key={song.id}>{song.title}</li>
                    );
                })}
            </ul>
            <NewSong addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    )
}

export default SongList;