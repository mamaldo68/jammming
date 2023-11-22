import React from "react";
import styles from "./DisplayResults.module.css";

const DisplayResults = ({ object, onClick, button }) => {
        return (
            <div className={styles.container}>
                <h2 className={styles.name}>{object.name}</h2>
                <p className={styles.trackInfo}>{object.artists[0].name} | {object.album.name}</p>
                <img className={styles.img} src={object.album.images[0].url}/>
                <button className={styles.button} type="button" onClick={() => onClick(object)}>{button}</button>
            </div>
        );
}

export default DisplayResults;