import axios from "axios";

let _url = 'https://api.spacexdata.com/v3/launches/';

let axiosInstance = axios.create({
    baseURL: _url,
    headers:{}
});

const getLaunchesAxios = () => {return axiosInstance.get()}
const getLaunchAxios = (id) => {return axiosInstance.get(_url+id)}

export { getLaunchesAxios, getLaunchAxios};