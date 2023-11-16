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
    return(
        <>
            <SearchBar userSearchInput={searchInputHandler} />
            <SearchResults userSearchInput={searchInput} userSearchResults={setSearchResults} />
            <Tracklist userSearchResults={searchResults} addTrack={setTracks} />
            <Playlist addTrack={tracks} />
        </>
    );
    
}

export default Jammming;