import './components/App.css'
import TodoList from './components/toDoList.jsx'
import AddTodoForm from './components/AddTodoForm.jsx'
import { useState, useEffect } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
  const options = {
      method: 'GET',
      headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
  };

  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?sort[0][field]=title&sort[0][direction]=desc`;


  try {
      const response = await fetch(url, options);

      if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Raw Airtable data:", data.records);
      const todos = data.records
          .map(record => ({
          title: record.fields.title,
          id: record.id,
          createdTime: record.createdTime,
      }))
      .sort((a, b) => new Date(a.createdTime) - new Date(b.createdTime));      

      setTodoList(todos);
      setIsLoading(false);
  } catch (error) {
      console.error('Error fetching data from Airtable:', error.message);
      setIsLoading(false);
  }
};

useEffect(() => {
    fetchData();
}, []);

  
  const addTodo = async (newTodo) => {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          title: newTodo.title,
        },
      }),
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const addedTodo = {
        title: data.fields.title,
        id: data.id,
      };

      setTodoList([...todoList, addedTodo]);
    } catch (error) {
      console.error('Error adding todo to Airtable:', error.message);
    }
  };

  
  const removeTodo = async (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  };

  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    setTodoList(todoList.filter((todo) => todo.id !== id));
  } catch (error) {
    console.error('Error removing todo from Airtable:', error.message);
  }
};


  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/"
          element={
          <React.Fragment>
            <h1>Todo List</h1>
            {isLoading ? (
              <p>Loading...</p>
            ):(
              <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
            )}
            <AddTodoForm onAddTodo={addTodo}/>
          </React.Fragment>
          }
        />
      </Routes>
      <Routes>
        <Route path="/" element={<React.Fragment>{/* текущий JSX */}</React.Fragment>} />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
