import React from "react";
import DisplayResults from "../DisplayResults/DisplayResults";
import styles from "./Tracklist.module.css";

const Tracklist = ({ userSearchResults, addTrack, changeOffset, offset }) => {

    const clickHandler = (object) => {
        addTrack(object);
    }

    const prevHandler = () => {
        changeOffset(-10);
        scrollHandler("#resultsHeader");
    }

    const nextHandler = () => {
        changeOffset(10);
        scrollHandler("#resultsHeader");
    }

    const scrollHandler = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({
                behavior: "instant"
            });
        }
    }
 
    return(
        <>
            {userSearchResults && <h3 className={styles.header} id="resultsHeader" >Results</h3>}
            <div className={styles.container}>
                {offset > 0 && <button className={styles.button} type="button" onClick={prevHandler}>Prev</button>}
                {offset < 100 && userSearchResults.length != 0 && <button className={styles.button} type="button" onClick={nextHandler}>Next</button>}
            </div>
            {userSearchResults && userSearchResults.map(element => <DisplayResults object={element} onClick={clickHandler} button="Add to Playlist"/>)}
            <div className={styles.container}>
                {offset > 0 && <button className={styles.button} type="button" onClick={prevHandler}>Prev</button>}
                {offset < 100 && userSearchResults.length != 0 && <button className={styles.button} type="button" onClick={nextHandler}>Next</button>}
            </div>
        </>
    );
}

export default Tracklist;