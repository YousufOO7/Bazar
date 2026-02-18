import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

export const axiosSecure = axios.create({
    baseURL: "https://y-bazar-server.vercel.app"
})

const useAxiosSecure = () => {
    const {Logout} = useAuth();
    const navigate = useNavigate();

   axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    console.log("request stop by interceptors", token)
    config.headers.authorization = `Bearer ${token}`
    return config;

   }, function (error) {
    return Promise.reject(error)
   })


   useEffect(() => {
    axiosSecure.interceptors.response.use(function (response) {
        return ('this is a response', response);
    }, async (error) => {

        const status = error.response.status;
        console.log('this is a logout', status);
        if (status === 401 || status === 403) {
            await Logout();
            navigate('/tab');
        }

        return Promise.reject(error);
    })
}, [])

    return axiosSecure
};

export default useAxiosSecure;