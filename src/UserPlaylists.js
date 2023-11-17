import React from "react";

const UserPlaylists = (props) => {
    const { playlists } = props;
    //Fixme button is not working, need to make a state that holds the objects
    const infoHandler = (object) => {
        if(object.moreInfo) {
            object.moreInfo = false;
        } else {
            object.moreInfo = true;
        }
    }
    const displayPlaylists = (object) => {
        return(
            <>
                <p>{object.name}</p>
                <button type="button" onClick={() => infoHandler(object)}>V</button>
                {object.moreInfo && <p>show this info</p>}
            </>
        );
    }

    return(
        <>
            <h3>My Playlists</h3>
            {playlists && playlists.map(element => displayPlaylists(element))}
        </>
    );
}

export default UserPlaylists;