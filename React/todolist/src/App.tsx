import Input from "./components/Input"
import List from "./components/List"
import { useEffect, useState } from "react"

function App() {
  // used to save todos to local storage
  function updateLocalStorage(todos: TodoItem[], idList: number[]) {
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('idList', JSON.stringify(idList))
  }

  // fetch local storage data on page load
  useEffect(() => {
    if (!localStorage) {
      return
    }
    const savedTodos = localStorage.getItem('todos')
    savedTodos && setTodos(JSON.parse(savedTodos))

    const savedIDs = localStorage.getItem('idList')
    savedIDs && setSortedId(JSON.parse(savedIDs))
  }, [])

  // used to keep track of all IDs so we can get the largest ID
  const [sortedId, setSortedId] = useState<number[]>([])
  // used for the input field in Input.tsx, declared here since we use it in handleEditTodo
  const [todoInputValue, setTodoInputValue] = useState("")

  type TodoItem = {
    todo: string,
    id: number
  }

  const [todos, setTodos] = useState<TodoItem[]>([])

  function handleAddTodo(newTodo: string) {
    // get largest id and increment
    const newTodoID: number = sortedId.length ? sortedId.slice(-1)[0] + 1 : 0
    const newIDList = [...sortedId, newTodoID]
    console.log(newTodoID)
    
    // add new todo to todo list and id to array
    const newTodoList = [...todos, {todo: newTodo, id: newTodoID}] 
    setTodos(newTodoList)
    setSortedId(newIDList)
    updateLocalStorage(newTodoList, newIDList)
  }

  //  adds todo to input field and deletes from list
  function handleEditTodo(todoToEdit: TodoItem) {
    setTodoInputValue(todoToEdit.todo) // move todo to input field to be edited and readded
    handleDeleteTodo(todoToEdit.id) // delete todo from list
  }

  // adds all todo's to the new list except for the one where it's id matches the id to be deleted
  function handleDeleteTodo(todoID: number) {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== todoID
    })
    setTodos(newTodoList)
    updateLocalStorage(newTodoList, sortedId)
  }

  return (
    <main>
      <Input handleAddTodo={handleAddTodo} todoInputValue={todoInputValue} setTodoInputValue={setTodoInputValue} />
      <List todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </main>
  )
}

export default App
