const Post =({post})=>{
    return(
        <div>
            <h3> "userId": {post.userId}</h3>
            <h3> "id": {post.id}</h3>
            <h3> "title": {post.title}</h3>
            <h3> "body": {post.body}</h3>
            <hr/>
            </div>
    )
}
export {Post}