import axios from 'axios';

// https://accounts.spotify.com/authorize/
// https://api.spotify.com

export default axios.create({
    baseURL: 'https://api.spotify.com/',
    headers: {
        client_id: 'ca7bb95be89a4a77bd2a76160f3aee39',
        reponse_type: 'code',
        redirect_uri: 'http://localhost:3000/getArtist/'
    }
});