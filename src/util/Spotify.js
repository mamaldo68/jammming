const clientID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const Spotify = {
    getAccess () {
        let url = "https://accounts.spotify.com/authorize";
        url += "?response_type=token";
        url += "&client_id=" + encodeURIComponent(clientID);
        url += "&redirect_uri=" + encodeURIComponent(redirectURI);

        window.location = url;
    }
};

export default Spotify;