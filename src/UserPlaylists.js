import React from "react";

const UserPlaylists = (props) => {
    return(
        <>
            <h3>My Playlists</h3>
            <p>number of playlists: {props.playlists.length}</p>
        </>
    );
}

export default UserPlaylists;