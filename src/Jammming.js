import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import UserPlaylists from "./UserPlaylists";


const Jammming = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlists, setPlaylists] = useState([]);

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
        <>
            <SearchBar userSearchInput={searchInputHandler} />
            <SearchResults userSearchInput={searchInput} userSearchResults={updateSearchResults} />
            <Tracklist userSearchResults={searchResults} addTrack={addTrack} />
            <Playlist addTrack={tracks} removeTrack={removeTrack} addPlaylist={addPlaylist} />
            <UserPlaylists playlists={playlists} editPlaylist={editPlaylist}/>
        </>
    );
    
}

export default Jammming;