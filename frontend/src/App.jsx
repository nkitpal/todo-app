import { useState } from 'react'
import './App.css'
import { Todo } from './components/todo'
import { Todos } from './components/todos'

function App() {

  const [todos, setTodos]  = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  })
  return (
    <div>
      <Todo/>
      <Todos todos = {todos}/>
    </div>
  )
}

export default App
