const express = require('express')
const app = express();
const ymusicSettings = process.env.YMUSIC_HEADERS;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

app.post('/api/searchSong', (req, res) => {

});

app.post('/api/addSongToPlaylist', (req, res) => {

});

app.post('/api/viewCurrentPlaylist', (req, res) => {

})

app.post('/api/deleteSongFromPlaylist', (req, res) => {
    
})