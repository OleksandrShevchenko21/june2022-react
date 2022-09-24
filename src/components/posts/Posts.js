import {Post} from "../post/Post";
const Posts = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <Post post={post} key ={post.id}/>)
            }
        </div>
    )
}
export {
    Posts
}