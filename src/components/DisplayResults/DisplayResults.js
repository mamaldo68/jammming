import React from "react";
import styles from "./DisplayResults.module.css";

const DisplayResults = ({ object, onClick, button }) => {
        return (
            <div className={styles.container}>
                <h2>{object.name}</h2>
                <p>{object.artists[0].name} | {object.album.name}</p>
                <button type="button" onClick={() => onClick(object)}>{button}</button>
            </div>
        );
}

export default DisplayResults;