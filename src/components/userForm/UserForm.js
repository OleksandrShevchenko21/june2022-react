import {useForm} from "react-hook-form";
import {userService} from "../../services";

const UserForm = ({setUsers}) => {

const {
    register,
    reset,
    handleSubmit,
    formState: {errors, isValid}
}  = useForm({
    mode: 'all',
    defaultValues: {
        name: 'name',
        email: 'email'
    }
});

const submit = (obj)=> {
    userService.createUser(obj).then(({data}) => setUsers(users => [... users,data]))
}

    return(
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" {...register("name", {minLength: {value: 5, message: 'Error'}})}/>
            {
                errors.name && <span>{errors.name.message}</span>
            }
            <input type = "text"{...register("email")}/>
            {
                errors.name && <span>{errors.name.message}</span>
            }
            <button>Click me</button>

        </form>

    )
}
export {UserForm}