import { React, useState } from "react"
import "./App.css"
import TodoForm from "./components/TodoForm"
import Todolist from "./components/Todolist"

const initialTodos = [
  {
    id: 1,
    title: "add task",
    description:
      "When the 'Create' button is clicked (after the user enters the title and description), a new task appears at the end of the list.",
    completed: false,
  },
  {
    id: 2,
    title: "check for filling in all data",
    description:
      "If the user leaves the field blank, they cannot create a task. In this case, after clicking the 'Create' button, the empty input should have a red border and an error message 'This field is empty'.",
    completed: true,
  },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [todoEdit, setTodoEdit] = useState(null)
  const todoDelete = (todoId) => {
    const changedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(changedTodos)
  }

  const todoToggleCompleted = (todoId) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )

    setTodos(changedTodos)
  }

  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    }
    const changedTodos = [newTodo, ...todos]
    setTodos(changedTodos)
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <Todolist
            todos={todos}
            todoDelete={todoDelete}
            todoToggleCompleted={todoToggleCompleted}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-4">
          <TodoForm todoAdd={todoAdd} todoEdit={todoEdit} />
        </div>
      </div>
    </div>
  )
}

export default App
