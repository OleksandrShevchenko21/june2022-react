function Simpson(props) {
    const {simpson} = props;
    return (
        <div>
            <h2>{simpson.name} -- {simpson.age}</h2>
            <h4>{simpson.surname} -- {simpson.info}</h4>
            <img src={simpson.photo} alt={simpson.name}/>

        </div>
    );
}

export default Simpson;