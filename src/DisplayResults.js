import React from "react";

const DisplayResults = (props) => {
    const { object, onClick, button } = props
        return (
            <div key={object.id}>
                <h2>{object.name}</h2>
                <p>{object.album}</p>
                <p>{object.artist}</p>
                <button type="button" onClick={() => onClick(object)}>{button}</button>
            </div>
        );
}

export default DisplayResults;