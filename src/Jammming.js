import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";


const Jammming = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [tracks, setTracks] = useState([]);

    const searchInputHandler = (input) => {
        setSearchInput(input);
    }
    const addTrack = (track) => {
        setTracks(prev => [...prev, track]);
    }
    const removeTrack = (track) => {
        setTracks(prev => prev.filter(item => item.id !== track.id))
    }
    return(
        <>
            <SearchBar userSearchInput={searchInputHandler} />
            <SearchResults userSearchInput={searchInput} userSearchResults={setSearchResults} />
            <Tracklist userSearchResults={searchResults} addTrack={addTrack} />
            <Playlist addTrack={tracks} removeTrack={removeTrack} />
        </>
    );
    
}

export default Jammming;