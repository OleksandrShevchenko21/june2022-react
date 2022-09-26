const Todo =({todo})=>{
    return(
        <div>
            <h3> "userId": {todo.userId},</h3>
            <h3> "id": {todo.id},</h3>
            <h3> "title": {todo.title},</h3>
            <h3> "completed": {todo.completed}</h3>
            <hr/>
        </div>
    )
}
export {Todo}