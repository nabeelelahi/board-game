import { useEffect } from "react";

const useHttp = (url, type = 'mount') => {

    function makeRequest(payload = {}, slug = null, callback = () => { }) {
        

    }

    useEffect(() => {
        if (type == 'mount') {
            makeRequest()
        }
    }, [])

    return {
        makeRequest
    };
};

export default useHttp;