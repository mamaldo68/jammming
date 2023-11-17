import React, { useState, useEffect } from "react";

const UserPlaylists = (props) => {
    const { playlists } = props;
    const [showMoreInfo, setShowMoreInfo] = useState(playlists);

    useEffect(() => {
        setShowMoreInfo(playlists);
    }, [playlists]);

    const moreInfoHandler = (object) => {
        const updatedPlaylist = showMoreInfo.map((element) => 
            element.key === object.key ? {...element, moreInfo: object.moreInfo ? false : true} : element
        );
        setShowMoreInfo(updatedPlaylist);
    }
    const displayPlaylists = (object) => {
        return(
            <>
                <p>{object.name}</p>
                {object.moreInfo && object.tracklist.map(index => displayInfo(index))}
                <button type="button" onClick={() => moreInfoHandler(object)}>{object.moreInfo ? "^" : "v"}</button>
            </>
        );
    }
    const displayInfo = (index) => {
        return(
            <p>{index.name}, {index.album}, {index.artist}</p>
        );
    }

    return(
        <>
            <h3>My Playlists</h3>
            {showMoreInfo && showMoreInfo.map(element => displayPlaylists(element))}
        </>
    );
}

export default UserPlaylists;