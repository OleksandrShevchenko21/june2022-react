import {useEffect, useState} from "react";
import Launch from "./Launch";
import {getLaunchesAxios} from "./launch.api.axios.service";
import {getLaunchAxios} from "./launch.api.axios.service";

function Launches(){
    let[launches, setLaunches] = useState([]);
    let[launch, setLaunch] = useState([null]);

    useEffect(()=> {
        getLaunchesAxios().then(value => setLaunches(value.data));
    },[]);

        return (

            <div>
                {

                    launches.map((launch, index: number) => (<Launch
                        item={launch}
                        key={index}
                        launch={launch}/>))
                }
            </div>
        );
    }
export default Launches;