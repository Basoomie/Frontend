type CardProps = {
    children: React.ReactNode,
    key: string,
    todo: {
        todo: string,
        id: number
      },
    handleDeleteTodo: (todoID: number) => void,
    handleEditTodo: (todoToEdit: {
        todo: string,
        id: number
    }) => void
}

export default function Card(props: CardProps) {
    const {children, todo, handleDeleteTodo, handleEditTodo} = props
    return (
        <li >
            {children}
            <div>
                <button onClick={() => handleEditTodo(todo)}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}