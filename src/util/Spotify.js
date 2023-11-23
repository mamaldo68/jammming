const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID; // replace with your own client ID
const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI; // replace with your own redirectURI
let accessToken ="";

const Spotify = {
    getAccess () {
        if(accessToken) {
            return accessToken;
        }

        const queryParams = window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            if(item) {
                const parts = item.split("=");
                initial[parts[0]] = decodeURIComponent(parts[1]);
            }
            return initial;
        }, {});
        
        accessToken = queryParams["access_token"];
        const expiresIn = queryParams["expires_in"];

        if(accessToken && expiresIn) {
            setTimeout(() => accessToken = "", expiresIn * 1000); // clears out expired access token
            window.location.hash = ""; // clears parameters from URL
            return accessToken;
        } else {
            let url = "https://accounts.spotify.com/authorize";
            let scope = "playlist-modify-private playlist-modify-public user-read-private user-read-email"
            url += "?response_type=token";
            url += "&client_id=" + encodeURIComponent(clientID);
            url += "&scope=" + encodeURIComponent(scope);
            url += "&redirect_uri=" + encodeURIComponent(redirectURI);

            window.location = url;
        }
    },

    async search(query, trackOffset) {
        const baseURL = "https://api.spotify.com/v1/search?";
        let userSearch = `q=${query}`;
        let type = "&type=track";
        let market = "&market=US";
        let limit = "&limit=10";
        let offset = `&offset=${trackOffset}`;
        let urlToFetch = baseURL + userSearch + type + market + limit + offset;
        let token = accessToken;

        try {
            let response = await fetch(urlToFetch, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if(response.ok) {
                let jsonResponse = await response.json();
                return jsonResponse.tracks.items;
            }
        } catch(error) {
            console.log(error.message);
        }
    },
    
    async userID(userAccessToken) {
        const url = "https://api.spotify.com/v1/me";
        let token = userAccessToken;

        try {
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if(response.ok) {
                let jsonResponse = await response.json();
                return jsonResponse.id;
            } else {
                console.error(`Error ${response.status}: ${response.statusText}`);
                let errorResponse = await response.json();
                console.error(errorResponse);
                throw new Error(`Failed to fetch user ID. ${errorResponse.error.message}`);
            }
        } catch(error) {
            console.log(error.message);
        }
    },

    async createPlaylist(userAccessToken, userID, object) {
        let url = `https://api.spotify.com/v1/users/${userID}/playlists`;
        let token = userAccessToken;

        try{
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": object.name,
                    "description": "a cool playlist",
                    "public": false
                })
            });
            if(response.ok) {
                let jsonResponse = await response.json();
                return jsonResponse.id;
            } else {
                console.error(`Error ${response.status}: ${response.statusText}`);
                let errorResponse = await response.json();
                console.error(errorResponse);
                throw new Error(`Failed to create playlist. ${errorResponse.error.message}`);
            }
        } catch(error) {
            console.log(error.message);
        }
    },

    async addTracksToPlaylist(userAccessToken, playlistID, uriArray) {
        let url = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
        let token = userAccessToken;

        try {
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "uris": uriArray
                })
            });
            if(response.ok) {
                console.log("post request successful");
            }
        } catch(error) {
            console.log(error.message);
        }
    }
};

export default Spotify;