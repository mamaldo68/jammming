const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
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
            url += "?response_type=token";
            url += "&client_id=" + encodeURIComponent(clientID);
            url += "&redirect_uri=" + encodeURIComponent(redirectURI);

            window.location = url;
        }
    }
};

export default Spotify;