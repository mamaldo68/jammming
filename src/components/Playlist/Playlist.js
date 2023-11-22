import React, { useState, useEffect } from "react";
import DisplayResults from "../DisplayResults/DisplayResults";
import styles from "./Playlist.module.css";

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
        <div>
            <form className={styles.form} onSubmit={submitHandler}>
                <input className={styles.input} type="text" name="playlistName" value={playlistName} onChange={changeHandler} />
                <button className={styles.button} type="submit">Create Playlist</button>
            </form>
            <div className={styles.container}>{tracklist && tracklist.map(element => <DisplayResults object={element} onClick={clickHandler} button="Remove from Playlist" />)}</div>
        </div>
    );
}

export default Playlist;