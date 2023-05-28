import constants from '../constants'
import { useEffect, useState } from "react";
import _ from 'lodash';

const useHttp = (url, type = 'mount') => {

    const [state, setState] = useState(null)

    function generateRequestData(body = {}, headers = { 'Content-Type': 'application/json' }, method = 'GET') {
        if (method === "GET") {
            return {
                method,
                headers,
            };
        }
        else {
            return {
                method,
                headers,
                body: JSON.stringify(body),
            };
        }
    }

    async function makeRequest(method, payload = {}, headers, callback = () => { }) {
        let requrest_data = generateRequestData(payload, headers, method)
        let request_url = constants.api_url + url
        console.log(requrest_data)
        let response = await fetch(request_url, requrest_data);
        response = await response?.json();
        setState(response);
        return response;
    }

    useEffect(() => {
        if (type == 'mount') {
            makeRequest()
        }
    }, [])

    return {
        state,
        makeRequest
    };
};

export default useHttp;