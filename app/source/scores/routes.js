const { router } = require('../../config/express')
const { BASE_URL } = require("../../config/constants")

const { get, create } = require('./controllers')

const action = BASE_URL + 'scores'

router.get(action, get);
router.post(action, create);

module.exports = router