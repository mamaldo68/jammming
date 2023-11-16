import React, { useState, useEffect } from "react";
import DisplayResults from "./DisplayResults";

const Playlist= (props) => {

    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [tracklist, setTracklist] = useState([]);
    const { addTrack, removeTrack } = props;

    useEffect(() => {
        setTracklist(addTrack);
    }, [addTrack]);


    const changeHandler = ({ target }) => {
        setPlaylistName(target.value);
    }

    const clickHandler = (object) => {
        removeTrack(object);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        alert('your playlist has been added');
    }

    return(
        <>
            <form>
                <input type="text" name="playlistName" value={playlistName} onChange={changeHandler} />
                {tracklist && tracklist.map(element => <DisplayResults object={element} onClick={clickHandler} button="-" />)}
                <button type="submit" onSubmit={submitHandler} >Add to Spotify</button>
            </form>
        </>
    );
}

export default Playlist;