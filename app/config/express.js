const express = require('express')
var cors = require('cors')
const { BASE_URL } = require('../config/constants')

module.exports = {
  router: express.Router(),

  App: () => {

    const app = express();

    const PORT = process.env.PORT || 7000;

    app.use(express.raw());
   
    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(cors());

    app.listen(
      PORT, () => {
        console.log(`server has started successfully on port : ${PORT}`)

      }
    );

    app.get(`${BASE_URL}check`, (req, res) => {

      res.send('fine')

      return res;
    });


    return app
  },
}
