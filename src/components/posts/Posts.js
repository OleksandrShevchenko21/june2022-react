import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../post/Post";
import {useParams} from "react-router-dom";


const Posts = () => {
    const {postId} = useParams();

    const [post, setPost] = useState(null);


    useEffect(() => {
            postService.getByPostId(postId).then(({data})=>setPost(data))
    }, [postId])

    return(
        <div>
                {post && (<Post post={post}/>)}
        </div>
    )
}
export {Posts}
