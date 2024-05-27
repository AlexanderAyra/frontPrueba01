const express = require('express');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Corriendo en el puerto ' + this.port);
    })
  }

}
module.exports = Server