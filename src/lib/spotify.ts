import SpotifyWebApi from "spotify-web-api-node";

/* spotify scopes permission */
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  // "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",");

const params = {
  scopes: scopes,
};

const queryParamsString = new URLSearchParams(params).toString();

// spotify login url with scope permissions as params
const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
