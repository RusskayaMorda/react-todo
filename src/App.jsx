import './App.css'
import TodoList from './toDoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'
import { useState, useEffect } from 'react'
import React from 'react'

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(()=>{
    const saved = localStorage.getItem('savedTodoList')
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(()=>{
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  },[todoList]);

  return [todoList, setTodoList]
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  
  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  return (
    <React.Fragment>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      <AddTodoForm onAddTodo={addTodo}/>
    </React.Fragment>
  )
}

export default App
