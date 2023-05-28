const { router } = require('../../config/express')
const { BASE_URL } = require("../../config/constants")

const { get, create } = require('./controllers')

const action = BASE_URL + 'scores'

// get scores route 
router.get(action, get);

// post scores route 
router.post(action, create);

module.exports = router