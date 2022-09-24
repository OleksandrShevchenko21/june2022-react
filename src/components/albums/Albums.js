import {useEffect, useState} from "react";
import {albumService} from "../../services/album.service";
import {Album} from "../album/Album";


const Albums = () =>{
    let [albums, setAlbums] = useState([]);
    useEffect(()=>{albumService.getAll().then(({data}) =>setAlbums(data))},[])

    return(
        <div>
            {
                albums.map(album => <Album key ={album.id} album={album}/> )
            }
        </div>
    )
}
export {Albums}