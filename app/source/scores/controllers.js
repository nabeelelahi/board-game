const baseController = require('../baseControllers')

const model = require('./model')

const get = async (req, res) => {
    try {
        const data = await baseController.getDocs(model, req.query)
        baseController.sendResponse(res, 200, `Record retrieved successfully`, data)
    } catch (err) {
        baseController.sendResponse(res, 400, 'Something went wrong', err)
    }
}

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