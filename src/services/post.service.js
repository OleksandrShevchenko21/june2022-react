import {axiosService} from "./axios.service";
import {urls} from "../config";

const postService = {
     getByPostId: (id) => axiosService.get(`${urls.posts}/${id}`)

}
export {postService}