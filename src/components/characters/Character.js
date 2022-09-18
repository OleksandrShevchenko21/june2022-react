function Character(props) {
    const {character} =props;
    return(
        <div>
            <h3> {character.id}--{character.name}</h3>
            <h5> {character.status}</h5>
            <h5> {character.species}</h5>
            <h5> {character.type}</h5>
            <h5> {character.gender}</h5>
            <h5> {character.origin.name}</h5>
            <h5> {character.origin.url}</h5>
            {/*<h5> {character.location}</h5>*/}
            <img src = {character.image} alt = {character.image}/>
            <h5> {character.episode}</h5>
            <h5> {character.url}</h5>
            <h5> {character.created}</h5>

        </div>
    );
}
export default Character;