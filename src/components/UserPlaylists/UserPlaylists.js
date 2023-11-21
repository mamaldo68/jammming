import React, { useState, useEffect } from "react";
import Spotify from "../../util/Spotify";
import styles from "./UserPlaylists.module.css";

const UserPlaylists = ({ playlists, editPlaylist, accessToken }) => {
    const [playlistInfo, setPlaylistInfo] = useState(playlists);
    const [playlistName, setPlaylistName] = useState("");

    useEffect(() => {
        setPlaylistInfo(playlists);
    }, [playlists]);


    // displays functions for playlists with editing and more info options
    const displayPlaylists = (object) => {
        return(
            <div className={styles.container}>  
                {object.edit ? 
                <form onSubmit={(event) => renameSubmitHandler(event, object)}>
                    <input className={styles.input} type="text" value={playlistName} onChange={changeHandler}/>
                    <button className={styles.button} type="submit">Save</button>
                </form> : <p className={styles.playlistName}>{object.name}</p>}
                
                {!object.edit && <button className={styles.button} type="button" onClick={() => renameClickHandler(object)}>rename</button>}
                <button className={styles.button} type="button" onClick={() => moreInfoHandler(object)}>{object.moreInfo ? "Hide Tracklist" : "Show Tracklist"}</button>
                <button className={styles.button} type="button" onClick={() => sendPlaylist(object)}>Add to Spotify</button>
                {object.moreInfo && object.tracklist.map(index => displayInfo(index))}
                <br />
            </div>
        );
    }

    const displayInfo = (index) => {
        return(
            <div className={styles.displayInfo}>
                <p>{index.name}</p>
                <p>{index.artists[0].name} | {index.album.name}</p>
                <br />
            </div>
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
    const sendPlaylist = async (object) => {
        try {
            const uriArray = object.tracklist.map(track => track.uri);
            const userID = await Spotify.userID(accessToken)
            const playlistID = await Spotify.createPlaylist(accessToken, userID, object);
            await Spotify.addTracksToPlaylist(accessToken, playlistID, uriArray)
        } catch(error) {
            console.error(error.message);
        }
    };


    return(
        <>
            <h3 className={styles.header}>My Playlists</h3>
            {playlistInfo && playlistInfo.map(element => displayPlaylists(element))}
        </>
    );
}

export default UserPlaylists;