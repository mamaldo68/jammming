import React, { useState, useEffect } from "react";
import mockData from "./mockData";

const SearchResults = (props) => {
    const [results, setResults] = useState([]);
    const { userSearchInput } = props;

    useEffect(() => {
        setResults([]);
        for(let i = 0; i < mockData.length; i++) {
            if(mockData[i].artist.toLowerCase() === userSearchInput.toLowerCase()) {
                setResults(prev => [...prev, mockData[i]]);
            }
        }
    }, [userSearchInput]);

    return(
        <>
            <p>what was passed to me from jammming: {userSearchInput}</p>
            
            {results ? results.map(element => (<p>{element.name}</p>)) : ""}
            
        </>
    );  
}

export default SearchResults;