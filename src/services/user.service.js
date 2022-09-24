import {axiosService} from "./axios.service";
import {urls} from "../config";

const userService = {
    getAll: () => axiosService.get(urls.user),

}
export {userService}