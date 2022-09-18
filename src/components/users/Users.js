import {useEffect, useState} from "react";
import User from "./User";
import {getUsersAxios} from "./user.api.axios.service";
import {getUserAxios} from "./user.api.axios.service";

function Users(){
    let[users, setUsers] = useState([]);
    let[user, setUser] = useState([null]);

    const lift = (obj) => {
         setUser(obj);
    }

    useEffect(()=> {
        getUsersAxios().then(value => setUsers(value.data));
    },[]);

    return(<div>

        <h3>{user?.id}--{user?.name}</h3>
        <h3>{user?.username}</h3>
        <h3>{user?.email}</h3>

        {users.map((user, index :number) => (<User
            item = {user}
            key = {index}
            lift = {lift}/>)) }

    </div>)

}
export default Users;