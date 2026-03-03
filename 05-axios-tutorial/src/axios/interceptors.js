import axios from "axios";

const authFetch = axios.create({
    baseURL: 'https://www.course-api.com',
})

authFetch.interceptors.request.use(
    (request)=>{
        request.headers['Accept'] = 'application/json'
        return request
    }, 
    (error)=> {
        return Promise.reject(error)
    }
)

authFetch.interceptors.response.use(
    (response)=>{
        return response
    }, 
    (error)=> {
        console.log(error);
    }
)

export default authFetch