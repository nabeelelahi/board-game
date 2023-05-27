

async function getDocs(model, condition = {}) {
    try {
        const result = model.find(condition)
        if (result) {
            return !result.length ? [] : result
        }
        else {
            return []
        }
    }
    catch (err) {
        return err
    }
}

async function insertDoc(model, payload = {}) {
    try {
        const result = await model.create(payload)
        return result.toJSON()
    }
    catch (err) {
        return err
    }
}

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