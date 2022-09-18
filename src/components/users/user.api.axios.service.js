import axios from "axios";

let _url = 'https://jsonplaceholder.typicode.com/users/';

let axiosInstance = axios.create({
    baseURL: _url,
    headers: {}
});
const getUsersAxios = () => { return axiosInstance.get() }
const getUserAxios = (id) => { return axiosInstance.get(_url+id) }

export {getUsersAxios, getUserAxios};