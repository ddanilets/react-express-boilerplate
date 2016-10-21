import express from 'express';
import path from 'path';

const server = express();

server.get('/', (req, res) => {

  res.sendFile((path.join(__dirname+'/templates/index.html')))
});


const port = process.env.PORT || 8000;
server.listen(port);
console.log(`Application listening on port ${port}`);