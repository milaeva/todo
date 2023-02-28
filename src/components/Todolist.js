import { React } from "react"
import Todo from "./Todo"

function Todolist({ todos, todoDelete, todoToggleCompleted, setTodoEdit }) {
  return (
    <div>
      <h1 className="text-right">Todolist</h1>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          todoDelete={todoDelete}
          todoToggleCompleted={todoToggleCompleted}
          setTodoEdit={setTodoEdit}
        />
      ))}
    </div>
  )
}

export default Todolist
