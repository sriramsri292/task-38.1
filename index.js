const express = require('express');
const http_server = express();

const PORT = 5000;

http_server.listen(PORT, "0.0.0.0", (err) => {
  if (err) throw err;
  console.log(`Listening on PORT ${PORT}`);
});


http_server.use('/', require('./app'));
