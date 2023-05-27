const baseController = require('../baseControllers')

const collection = 'scores'

const get = async (req, res) => {
    try {
        const data = await baseController.getDocs(collection, req.query)
        baseController.sendResponse(res, 200, `Record retrieved successfully`, data)
    } catch (err) {
        baseController.sendResponse(res, 400, 'Something went wrong', err)
    }
}

const create = async (req, res) => {
    try {
        const data = await baseController.insertDoc(collection, req.body)
        baseController.sendResponse(res, 200, `Record created successfully`, data)
    } catch (err) {
        baseController.sendResponse(res, 400, 'Something went wrong', err)
    }
}

module.exports = {
    get,
    create
}