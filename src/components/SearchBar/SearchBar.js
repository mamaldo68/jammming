import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ userSearchInput }) => {

    const [userInput, setUserInput] = useState("");

    const changeHandler = ({ target }) => {
        setUserInput(target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        userSearchInput(userInput);
    }

    return(
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <input type="text" value={userInput} onChange={changeHandler}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;