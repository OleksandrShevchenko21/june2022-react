import {axiosService} from "./axios.service";
import {urls} from "../config";

const postService = {
    getPosts:(userId) =>
        axiosService(`${urls.posts}/?userId=${userId}`)
    }
    export {postService}