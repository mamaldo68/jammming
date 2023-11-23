import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ userSearchInput, resetOffset }) => {

    const [userInput, setUserInput] = useState("");

    const changeHandler = ({ target }) => {
        setUserInput(target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        resetOffset();
        userSearchInput(userInput);
    }

    return(
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <input className={styles.input} type="text" value={userInput} onChange={changeHandler}/>
                <button className={styles.button} type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;