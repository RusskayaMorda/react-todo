import './App.css'
import TodoList from './toDoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'
import { useState, useEffect } from 'react'
import React from 'react'

function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
    const fetchData = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve({data:{todoList:JSON.parse(localStorage.getItem('savedTodoList'))||[]}})
      },2000)
    })
    fetchData.then(result =>{
      setTodoList(result.data.todoList)
      setIsLoading(false)
    })
    .catch((error)=>{
      console.error('Error fetching data', error)
      setIsLoading(false);
    })
  })

  useEffect(()=>{
    if (!isLoading){
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList, isLoading])
  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  
  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  return (
    <React.Fragment>
      <h1>Todo List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ):(
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      )}
      <AddTodoForm onAddTodo={addTodo}/>
    </React.Fragment>
  )
}

export default App
