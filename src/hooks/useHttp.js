import constants from '../constants'
import { useEffect, useState } from "react";

// this hook performs the api calls
const useHttp = (url, type = 'mount') => {

    const [state, setState] = useState(null)

    // this function takes params and return all options for fetch request
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
    
    // this function makes fetch request
    async function makeRequest(method, payload = {}, headers, callback = () => { }) {
        let requrest_data = generateRequestData(payload, headers, method)
        let request_url = constants.api_url + url
        let response = await fetch(request_url, requrest_data);
        response = await response?.json();
        setState(response);
        return response;
    }

    useEffect(() => {
        if (type === 'mount') {
            makeRequest()
        }
    }, [])

    return {
        state,
        makeRequest
    };
};

export default useHttp;