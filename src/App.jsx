import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos, createTodos } from './redux/feature/todoSlice'
import { useEffect, useState } from 'react'

function App() {
  const { todos } = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const [add, setAdd] = useState()

  const handleAdd = () => {
    if (add.length > 0) {
      dispatch(createTodos({ text: add, done: false }))
      dispatch(fetchTodos())
      setAdd('')
    }
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="App">
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          onChange={(event) => setAdd(event.target.value)}
          placeholder="add to do"
        />
        <button onClick={handleAdd}>add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <div className="buttonHolder">
              <button className="done">Done</button>
              <button className="remove">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
