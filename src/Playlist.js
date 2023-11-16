import React, { useState } from "react";

const Playlist= () => {

    const [playlistName, setPlaylistName] = useState("New Playlist");

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