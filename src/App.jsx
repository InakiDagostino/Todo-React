import { useState, useEffect } from 'react'
import {TodoItem} from "./assets/TodoItem"

function App() {
  const [todos, setTodos] = useState( () => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  const [items, setItems] = useState("")

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(item){
    setTodos((currentTodos) => {
      return [...currentTodos, {id: crypto.randomUUID(), title: item, completed: false}]
    })
  }

  function handleTodo(e){
    e.preventDefault()
    if(items === "") return

    addTodo(items)

    setItems("")
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <h1>Todo List</h1>
      <div className='list'>
        <ul>
          {todos.length === 0 && "No Todos"}
          {todos.map((todo) => {
              return <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} />
            })
          }
        </ul>
      </div>
      <form action="" onSubmit={handleTodo}>
        <input type="text" value={items} onChange={e => setItems(e.target.value)} />
        <button>To Do</button>
      </form>
    </>
  )
}

export default App
