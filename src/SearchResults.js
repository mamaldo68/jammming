import React, { useState, useEffect } from "react";
import mockData from "./mockData";

const SearchResults = (props) => {
    const [results, setResults] = useState([]);
    const { userSearchInput } = props;

    useEffect(() => {
        setResults([]);
        for(let i = 0; i < mockData.length; i++) {
            if(userSearchInput) {
                if(mockData[i].artist.toLowerCase().includes(userSearchInput.toLowerCase()) ||
                mockData[i].name.toLowerCase().includes(userSearchInput.toLowerCase()) ||
                mockData[i].album.toLowerCase().includes(userSearchInput.toLowerCase())) {
                    setResults(prev => [...prev, mockData[i]]);
                }
            }
        }
    }, [userSearchInput]);

    const displayResults = (object) => {
        return (
            <>
                <h2>{object.name}</h2>
                <p>{object.album}</p>
                <p>{object.artist}</p>
            </>
        );
    }

    return(
        <>
            {results && results.map(element => displayResults(element))}
        </>
    );  
}

export default SearchResults;