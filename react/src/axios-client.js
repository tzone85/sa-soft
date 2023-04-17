import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
    // baseURL: `${import.meta.env.VITE_API_BASE_URL}`
})

// interceptors to be executed before sent or after request is received

axiosClient.interceptors.request.use(( config) => {

    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use((response) => {
    console.log('successful response: ', response)
    return response;
}, (error) => {
    try {

        const {response} = error;

        // console.log("Status: ",response.status)

        /**
         * if the token has expired or is   incorrect
         */
        if (response.statusCode === 401) {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    } catch (err) {
        console.error(err);
    }


    // debugger;
    throw error;
})

export default axiosClient;
