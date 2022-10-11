import { Container } from 'react-bootstrap'
import ToDoItems from './ToDoItems'
import { useSelector } from 'react-redux'

// const List = [
//   { id: 1, title: "Learn logical Thinking", completed: false },
//   { id: 2, title: "Learn Reasoning", completed: false },
//   { id: 3, title: "Learn Design Flow", completed: true },
// ]
const ToDoList = () => {
  const todos = useSelector((state) => state.todos)
  return (
    <Container className="mt-3">
      <ul className='list-group'>
      {todos.map((todo,id) => (
          <ToDoItems 
              key={id}
              title={todo.title}
              completed={todo.completed}
              id={todo.id}
          />
      ))}
      </ul>
    </Container>
  )
}

export default ToDoList