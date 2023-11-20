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
    },

    async search(query) {
        const baseURL = "https://api.spotify.com/v1/search?";
        let userSearch = `q=${query}`;
        let type = "&type=track";
        let market = "&market=US";
        let limit = "&limit=10";
        let urlToFetch = baseURL + userSearch + type + market + limit;
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
                console.log(jsonResponse.tracks.items);
                return jsonResponse.tracks.items;
            }
        } catch(error) {
            console.log(error.message);
        }
    }    
};

export default Spotify;