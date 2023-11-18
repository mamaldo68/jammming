import React, { useState } from "react";

const SearchBar = (props) => {

    const [userInput, setUserInput] = useState("");

    const changeHandler = ({ target }) => {
        setUserInput(target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.userSearchInput(userInput);
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={userInput} onChange={changeHandler}/>
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default SearchBar;