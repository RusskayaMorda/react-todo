import './App.css'
import TodoList from './toDoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'
import { useState } from 'react'

function App() {
  
  const [todoList, setTodoList] = useState([]);
  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }


  return (
    <>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />
      <AddTodoForm onAddTodo={addTodo}/>
    </>
  )
}

export default App
