import React, { useState, useEffect } from "react";
import mockData from "../../mockData";
import Spotify from "../../util/Spotify";

const SearchResults = (props) => {
    const { userSearchInput, userSearchResults, accessToken } = props;

    useEffect(() => {
        if(accessToken) { 
            Spotify.search(userSearchInput.split(" ").join("+")).then(userSearchResults);
        }
    }, [userSearchInput]);
}

export default SearchResults;