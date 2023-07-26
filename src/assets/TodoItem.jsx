import "../css/main.css"

export function TodoItem({title, deleteTodo, id}){
    return (
        <li>
          <button className="btn danger" onClick={() => deleteTodo(id)} >Delete</button>
          <label>
            {title}
          </label>
        
        </li>
    )
}