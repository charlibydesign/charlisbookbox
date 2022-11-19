// _data/lastfm.js 

const Cache = require('@11ty/eleventy-cache-assets'); 
require('dotenv').config(); 

const API_KEY = process.env.LASTFM_KEY; 
const USERNAME = 'thedementeddoll'; 
const API = 'http://ws.audioscrobbler.com/2.0/' 

module.exports = async () => { 
    try { const json = await Cache( 
        `${API}?method=user.getrecenttracks&user=${USERNAME}&limit=5&api_key=${API_KEY}&format=json`, 
        { 
            duration: '2h', 
            type: 'json', 
        } 
        ); 
        return json; 
    } catch (ex) { 
        console.log(ex); 
        return []; 
    } 
};