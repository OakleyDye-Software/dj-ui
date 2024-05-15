import axios from 'axios';

const getHttpService = () => {
    axios.defaults.baseURL = process.env.REACT_APP_DJ_API_BASE_URL;
    const service = axios.create({
        baseURL: axios.defaults.baseURL
    });
    console.log(service.defaults.baseURL);
    return {
        httpService: {
            get: service.get,
            put: service.put,
            post: service.post,
            delete: service.delete,
            request: service.request
        },
    };
};

export default getHttpService;