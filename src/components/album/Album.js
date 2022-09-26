const Album =({album})=>{

    return(
        <div>
            <h3> "userId": {album.userId},</h3>
            <h3> "id": {album.id},</h3>
            <h3> "title": {album.title}</h3>
            <hr/>
        </div>
    )
}
export {Album}