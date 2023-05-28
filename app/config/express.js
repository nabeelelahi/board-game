const express = require('express')
var cors = require('cors')
const { BASE_URL } = require('../config/constants')

module.exports = {
  router: express.Router(),
  // this function configure express server
  App: () => {
    const app = express();

    const PORT = process.env.PORT || 7000;
    
    // diffrenct types of data parsing
    app.use(express.raw());

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    // cross origin module
    app.use(cors());

    // listening to port
    app.listen(
      PORT, () => {
        console.log(`server has started successfully on port : ${PORT}`)

      }
    );

    // a rest api to check if the server is working fine.
    app.get(`${BASE_URL}check`, (req, res) => {

      res.send('fine')

      return res;
    });


    return app
  },
}
