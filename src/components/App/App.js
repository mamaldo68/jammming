import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Tracklist from "../Tracklist/Tracklist";
import Playlist from "../Playlist/Playlist";
import UserPlaylists from "../UserPlaylists/UserPlaylists";
import Spotify from "../../util/Spotify";
import styles from "./App.module.css";


const App = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        if(!accessToken) {
            setAccessToken(Spotify.getAccess());
        }
        
    }, [accessToken]);

    const searchInputHandler = (input) => {
        setSearchInput(input);
    }
    const updateSearchResults = (newResults) => {
        setSearchResults(newResults);
    }
    const addTrack = (track) => {
        setTracks(prev => [...prev, track]);
    }
    const removeTrack = (track) => {
        setTracks(prev => prev.filter(item => item.id !== track.id))
    }
    const addPlaylist = (playlist) => {
        setPlaylists(prev => [...prev, playlist]);
    }
    const editPlaylist = (playlist) => {
        setPlaylists(playlist);
    }

    return(
        <div className={styles.container}>
            <div className={styles.title}><h1 className={styles.header}>Jammming</h1></div>
            <div className={styles.searchBar}><SearchBar userSearchInput={searchInputHandler} /></div>
            <SearchResults userSearchInput={searchInput} userSearchResults={updateSearchResults} accessToken={accessToken} />
            <div className={styles.tracklist}><Tracklist userSearchResults={searchResults} addTrack={addTrack} /></div>
            <div className={styles.playlists}><Playlist addTrack={tracks} removeTrack={removeTrack} addPlaylist={addPlaylist} /></div>
            <div className={styles.userPlaylists}><UserPlaylists playlists={playlists} editPlaylist={editPlaylist} accessToken={accessToken}/></div>
        </div>
    );
    
}

export default App;