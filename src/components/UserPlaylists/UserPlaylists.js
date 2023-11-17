import React, { useState, useEffect } from "react";

const UserPlaylists = (props) => {
    const { playlists, editPlaylist } = props;
    const [playlistInfo, setPlaylistInfo] = useState(playlists);
    const [playlistName, setPlaylistName] = useState("");

    useEffect(() => {
        setPlaylistInfo(playlists);
    }, [playlists]);


    // displays functions for playlists with editing and more info options
    const displayPlaylists = (object) => {
        return(
            <>  
                {object.edit ? 
                <form onSubmit={(event) => renameSubmitHandler(event, object)}>
                    <input type="text" value={playlistName} onChange={changeHandler}/>
                    <button type="submit">Save</button>
                </form> : <p style={{marginLeft: 10}}>{object.name}</p>}
                
                {!object.edit && <button style={{display: "inline-block", marginLeft: 10}} type="button" onClick={() => renameClickHandler(object)}>rename</button>}
                <button style={{display: "inline-block", marginLeft: 10}} type="button" onClick={() => moreInfoHandler(object)}>{object.moreInfo ? "Hide Tracklist" : "Show Tracklist"}</button>
                <button style={{display: "inline-block", marginLeft: 10}} type="button" onClick={() => sendPlaylist(object)}>Add to Spotify</button>
                {object.moreInfo && object.tracklist.map(index => displayInfo(index))}
                <br />
            </>
        );
    }

    const displayInfo = (index) => {
        return(
            <>
                <p>{index.name}</p>
                <p>{index.album}</p>
                <p>{index.artist}</p>
                <br />
            </>
        );
    }

    // toggles the ability to view more information of a playlist
    const moreInfoHandler = (object) => {
        const updatedPlaylist = playlistInfo.map((element) => 
            element.key === object.key ? {...element, moreInfo: !object.moreInfo} : element
        );
        setPlaylistInfo(updatedPlaylist);
    }

    // following rename functions handle the editing and submitting of playlist names
    const renameClickHandler = (object) => {
        const updateEdit = playlistInfo.map((element) => 
            element.key === object.key ? {...element, edit: true} : element
        );
        setPlaylistName(object.name);
        setPlaylistInfo(updateEdit);
    }

    const renameSubmitHandler = (event, object) => {
        event.preventDefault();
        const updatedPlaylist = playlistInfo.map((element) =>
          element.key === object.key ? { ...element, name: playlistName, edit: false } : element
        );
        
        editPlaylist(updatedPlaylist);
    };
    
    // handle input change for editing playlist name
    const changeHandler = ({ target }) => {
        setPlaylistName(target.value);
    }

    // sends selected playlist to Spotify
    const sendPlaylist = (object) => {
        alert(`${object.name} has been uploaded to Spotify`);
    }

    return(
        <>
            <h3>My Playlists</h3>
            {playlistInfo && playlistInfo.map(element => displayPlaylists(element))}
        </>
    );
}

export default UserPlaylists;