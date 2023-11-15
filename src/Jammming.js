import React, { useState } from "react";
import SearchBar from "./SearchBar";


const Jammming = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const searchInputHandler = (input) => {
        setSearchInput(input);
    }
    return(
        <>
            <SearchBar userSearchInput={searchInputHandler} />
            <p>searchInput sent up to Jammming: {searchInput}</p> {/*delete this after testing */}
        </>
    );
    
}

export default Jammming;