import React, { useState, useEffect } from "react";

const Playlist= (props) => {

    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [tracklist, setTracklist] = useState([]);
    const { addTrack } = props;

    useEffect(() => {
        if(addTrack) {
            setTracklist(addTrack);
        }
    }, [addTrack]);

    const changeHandler = ({ target }) => {
        setPlaylistName(target.value);
    }

    return(
        <>
            <form>
                <input type="text" name="playlistName" value={playlistName} onChange={changeHandler} />
            </form>
        </>
    );
}

export default Playlist;