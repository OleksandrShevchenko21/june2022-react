function Character(props){
    const {character} = props;
    return(
        <div>
            <h3> {character.id}--{character.name}</h3>
            <p>{character.status}</p>
            <img src = {character.image} alt = {character.image}/>

        </div>
    );
}

export default Character;