import React from "react";

const DisplayResults = (props) => {
    const { object, onClick, button } = props
        return (
            <div>
                <h2>{object.name}</h2>
                <p>{object.artists[0].name} | {object.album.name}</p>
                <button type="button" onClick={() => onClick(object)}>{button}</button>
            </div>
        );
}

export default DisplayResults;