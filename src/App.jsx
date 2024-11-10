import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const toDoList = [
  {id: 1, title: 'submit assignment'},
  {id: 2, title: 'submit chapter'},
  {id: 3, title: 'pass the exam'}
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {toDoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
