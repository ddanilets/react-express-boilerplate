
import express from 'express';

const server = express();

server.get('/', (req, res) => {

  res.send(`${__dirname}/templates/index.html`)
});


const port = process.env.PORT || 8000;
server.listen(port);
console.log(`Application listening on port ${port}`);