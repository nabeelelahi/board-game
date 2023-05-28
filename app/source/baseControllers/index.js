
// wrapper method to for get service
async function getDocs(model, condition = {}) {
    const result = await model.find(condition)
    if (result) {
        return !result.length ? [] : result
    }
    else {
        return []
    }
}

// wrapper method to for create service
async function insertDoc(model, payload = {}) {
    const result = await model.create(payload)
    return result.toJSON()
}

// wrapper method to for sending response
function sendResponse(res, code = 200, message = "success", data = {}) {

    const response = {
        code,
        message,
        data
    }

    return res.status(200).send(response)

}

module.exports = {
    getDocs,
    insertDoc,
    sendResponse,
}