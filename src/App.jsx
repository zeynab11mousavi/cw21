import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './redux/feature/todoSlice'
import { useEffect } from 'react'

function App() {
  const { todos } = useSelector((state) => state.todos)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])
  return (
    <>
      <h2>Todo List</h2>
      <div>
        <input type="text" placeholder="add to do" />
        <button>add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span> <button>Done</button>
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
