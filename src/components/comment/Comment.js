import {Link} from "react-router-dom";
import {Posts} from "../posts/Posts";
import {Post} from "../post/Post";
import {urls} from "../../config";
const Comment =({comment})=>{

    return(

        <div>

            <Link to ={comment.postId.toString()}>
                <h3> "postId": {comment.postId},</h3>
                <h3> "id": {comment.id},</h3>
                <h3> "name": {comment.name},</h3>
                <h3> "email": {comment.email},</h3>
                <h3> "body": {comment.body}</h3></Link>
            <div>
                {/*<Link to = {'posts'} state = {{...comment}}>posts</Link>*/}
                {/*<Link to = {'posts/'+comment.postId} state ={{...comment}}>posts</Link>*/}
            </div>
            <hr/>
        </div>
    )

}
export {Comment}