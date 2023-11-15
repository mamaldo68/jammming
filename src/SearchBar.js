import React, { useState } from "react";

const SearchBar = (props) => {

    const [userInput, setUserInput] = useState("");

    const changeHandler = ({ target }) => {
        setUserInput(target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        //alert(`you searched for: ${userInput}`); //for testing: get rid of this once it is no longer needed
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