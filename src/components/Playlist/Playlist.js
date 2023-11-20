import React, { useState, useEffect } from "react";
import DisplayResults from "../DisplayResults/DisplayResults";

const Playlist= ({ addTrack, removeTrack, addPlaylist }) => {

    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [tracklist, setTracklist] = useState([]);
    const [keyCount, setKeyCount] = useState(0);

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
        addPlaylist({name: playlistName, tracklist: tracklist, moreInfo: false, key: keyCount, edit: false});
        setKeyCount(prev => prev + 1);
        tracklist.forEach((track) => removeTrack(track));
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <input style={{display: "inline-block"}} type="text" name="playlistName" value={playlistName} onChange={changeHandler} />
                <button style={{display: "inline-block", marginLeft: 10}} type="submit">Create Playlist</button>
                {tracklist && tracklist.map(element => <DisplayResults object={element} onClick={clickHandler} button="-" />)}
            </form>
        </>
    );
}

export default Playlist;