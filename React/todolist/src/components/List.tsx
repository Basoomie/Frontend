import Card from './Card'

type ListProps = {
  todos: {
    todo: string,
    id: number
  }[],
  handleDeleteTodo: (todoID: number) => void,
  handleEditTodo: (todoToEdit: {
    todo: string,
    id: number
  }) => void
}

export default function List(props: ListProps) {

  const {todos} = props


  const todoList = todos.map(todo =>
    <Card {...props} todo={todo} key={todo.id.toString()}>
      <p>
        {todo.todo}
      </p>
    </Card>
  )

  return (
    <ul>{todoList}</ul>
  )
}
