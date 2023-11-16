import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Tracklist from "./Tracklist";


const Jammming = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const searchInputHandler = (input) => {
        setSearchInput(input);
    }
    return(
        <>
            <SearchBar userSearchInput={searchInputHandler} />
            <SearchResults userSearchInput={searchInput} userSearchResults={setSearchResults} />
            <Tracklist userSearchResults={searchResults} />
        </>
    );
    
}

export default Jammming;