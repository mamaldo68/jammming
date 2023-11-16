import React, { useState, useEffect } from "react";

const Tracklist = (props) => {

    const [tracklist, setTracklist] = useState([]);
    const { userSearchResults } = props;

    useEffect(() => {
        setTracklist(userSearchResults);
    }, [userSearchResults]);
    
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
            {tracklist && tracklist.map(element => displayResults(element))}
        </>
    );
}

export default Tracklist;