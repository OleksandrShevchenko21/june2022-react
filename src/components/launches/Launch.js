export default function Launch(props){
    let {launch}=props;
    if (launch.launch_year!=2020) {
        return (

            <div>

                <h2> {launch.mission_name}--{launch.launch_year}</h2>
                <img src={launch.links.mission_patch_small}
                     alt={launch.links.mission_patch_small}/>

            </div>

        )
    }

}