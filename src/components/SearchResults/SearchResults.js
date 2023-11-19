import React, { useState, useEffect } from "react";
import mockData from "../../mockData";
import Spotify from "../../util/Spotify";

const SearchResults = (props) => {
    const [results, setResults] = useState([]);
    const { userSearchInput, userSearchResults, accessToken } = props;

    useEffect(() => {
        
        if(accessToken) {
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
        }
    }, [userSearchInput]);

    useEffect(() => {
        userSearchResults(results);
    }, [results]);
}

export default SearchResults;