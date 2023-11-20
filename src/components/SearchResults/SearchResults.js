import React, { useEffect } from "react";
import Spotify from "../../util/Spotify";

const SearchResults = ({ userSearchInput, userSearchResults, accessToken }) => {

    useEffect(() => {
        if(accessToken) { 
            Spotify.search(userSearchInput.split(" ").join("+")).then(userSearchResults);
        }
    }, [userSearchInput]);
}

export default SearchResults;