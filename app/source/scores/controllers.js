const baseController = require('../baseControllers')

// mongoose model for this controller
const model = require('./model')

// get scores controller
const get = async (req, res) => {
    try {
        const data = await baseController.getDocs(model, req.query)
        baseController.sendResponse(res, 200, `Record retrieved successfully`, data)
    } catch (err) {
        baseController.sendResponse(res, 400, 'Something went wrong', err)
    }
}

// create scores controller
const create = async (req, res) => {
    try {
        const data = await baseController.insertDoc(model, req.body)
        baseController.sendResponse(res, 200, `Record created successfully`, data)
    } catch (err) {
        baseController.sendResponse(res, 400, 'Something went wrong', err)
    }
}

module.exports = {
    get,
    create
}