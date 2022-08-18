import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchTodos,
  createTodos,
  deleteTodos,
  changeDone,
  changeNotDone,
} from './redux/feature/todoSlice'
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

  const handleRemove = (id) => {
    dispatch(deleteTodos(id))
    dispatch(fetchTodos())
  }

  const handleDone = (id) => {
    dispatch(changeDone(id))
    dispatch(fetchTodos())
  }
  const handleNotDone = (id) => {
    dispatch(changeNotDone(id))
    dispatch(fetchTodos())
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className="addNav">
        <div>
          <input
            type="text"
            onChange={(event) => setAdd(event.target.value)}
            placeholder="add to do"
          />
        </div>
        <button className="addbtn" onClick={handleAdd}>
          add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.done ? (
              <span className="textDone">{todo.text}</span>
            ) : (
              <span>{todo.text}</span>
            )}
            <div className="buttonHolder">
              {todo.done ? (
                <button className="done" onClick={() => handleDone(todo.id)}>
                  Done
                </button>
              ) : (
                <button
                  className="notdone"
                  onClick={() => handleNotDone(todo.id)}
                >
                  Not Done
                </button>
              )}
              <button className="remove" onClick={() => handleRemove(todo.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
