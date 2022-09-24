import {axiosService} from "./axios.service";
import {urls} from "../config";

const userService = {
    createUser: (user) => axiosService.post(urls.users,user),
    getAll: () => axiosService.get(urls.users)
}
export {
    userService
}