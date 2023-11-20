import React from "react";
import DisplayResults from "../DisplayResults/DisplayResults";

const Tracklist = ({ userSearchResults, addTrack }) => {

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