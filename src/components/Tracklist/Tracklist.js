import React, { useState, useEffect } from "react";
import DisplayResults from "../DisplayResults/DisplayResults";

const Tracklist = (props) => {

    const [tracklist, setTracklist] = useState([]);
    const { userSearchResults, addTrack } = props;

    useEffect(() => {
        setTracklist(userSearchResults);
    }, [userSearchResults]);

    const clickHandler = (object) => {
        addTrack(object);
    }
 
    return(
        <>
            {userSearchResults && userSearchResults.map(element => <DisplayResults object={element} onClick={clickHandler} button="+"/>)}
        </>
    );
}

export default Tracklist;