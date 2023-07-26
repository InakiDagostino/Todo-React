export function TodoItem({title, deleteTodo, id}){
    return (
        <li>
        <label>
          {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)} >Delete</button>
      </li>
    )
}