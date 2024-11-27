import './App.css'
import TodoList from './toDoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'
import { useState } from 'react'

function App() {
  
  const [newTodo, setNewTodo] = useState('');

  return (
    <>
      <h1>Todo List</h1>
      <TodoList/>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>New Todo: {newTodo}</p>
    </>
  )
}

export default App
