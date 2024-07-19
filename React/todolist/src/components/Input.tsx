
type InputProps = {
    handleAddTodo: (newTodo: string) => void,
    todoInputValue: string,
    setTodoInputValue: (todoInputValue: string) => void
}

export default function Input(props: InputProps) {
    const {handleAddTodo, todoInputValue, setTodoInputValue} = props

    return (
        <header>
            <input value={todoInputValue} onChange={(e) => {setTodoInputValue(e.target.value)}} placeholder="Type Here..."></input>
            <button onClick={() => {
                handleAddTodo(todoInputValue)
                setTodoInputValue("")
                }}>
                Add Todo
            </button>
        </header>
    )
}