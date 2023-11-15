import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


const Jammming = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const searchInputHandler = (input) => {
        setSearchInput(input);
    }
    return(
        <>
            <SearchBar userSearchInput={searchInputHandler} />
            <SearchResults userSearchInput={searchInput}/>
        </>
    );
    
}

export default Jammming;