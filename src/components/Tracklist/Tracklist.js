import React from "react";
import DisplayResults from "../DisplayResults/DisplayResults";
import styles from "./Tracklist.module.css";

const Tracklist = ({ userSearchResults, addTrack }) => {

    const clickHandler = (object) => {
        addTrack(object);
    }
 
    return(
        <>
            {userSearchResults && <h3 className={styles.header}>Results</h3>}
            {userSearchResults && userSearchResults.map(element => <DisplayResults object={element} onClick={clickHandler} button="Add to Playlist"/>)}
        </>
    );
}

export default Tracklist;