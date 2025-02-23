import './components/App.css';
import TodoList from './components/toDoList.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';
import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BASE_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
const AUTH_HEADERS = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  'Content-Type': 'application/json',
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}?view=Grid%20view`, { method: 'GET', headers: AUTH_HEADERS });
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        console.log("Raw Airtable data:", data.records);

        const todos = data.records.map(record => ({
          title: record.fields.title,
          id: record.id,
        }));

        setTodoList(todos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data from Airtable:', error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: AUTH_HEADERS,
        body: JSON.stringify({ fields: { title: newTodo.title } }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      const addedTodo = { title: data.fields.title, id: data.id };

      setTodoList(prevTodos => [...prevTodos, addedTodo]);
    } catch (error) {
      console.error('Error adding todo to Airtable:', error.message);
    }
  };

  const removeTodo = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE', headers: AUTH_HEADERS });
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      setTodoList(prevTodos => prevTodos.filter(todo => todo.id !== id));
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
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
              <AddTodoForm onAddTodo={addTodo} />
            </React.Fragment>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
