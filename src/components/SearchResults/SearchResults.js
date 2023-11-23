import React, { useEffect } from "react";
import Spotify from "../../util/Spotify";

const SearchResults = ({ userSearchInput, userSearchResults, accessToken, offset }) => {

    useEffect(() => {
        if(accessToken) { 
            Spotify.search(userSearchInput.split(" ").join("+"), offset).then(userSearchResults);
        }
    }, [userSearchInput, offset]);
}

export default SearchResults;