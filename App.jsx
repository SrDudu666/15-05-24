import React, { useEffect, useState } from 'react';
import './App.css';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddTodo = () => {
    if(inputValue.trim()){
      setTodos([...todos, inputValue])
      setInputValue('');
    }
  }

  const handleDeleteTodo = (index) => {
    const updateTodos = [...todos];
    updateTodos.splice(index, 1)
    setTodos(updateTodos)
  }

  return (
    <div className="container">
      <h1 className="title"> To Do list</h1>
      <div className="input-container">
        <input
         type="text"
         value={inputValue}
         onChange={handleInputChange}
         className='input-field' 
         />
         <button onClick={handleAddTodo} className='add-button'>Add</button>
         <ul className='todo-list'>{todos.map((todo, index) => (
          <li key={index} className='todo-item'>
            <span className="todo-text">{todo}</span>
            <button className='delete-button' onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
         ))}

         </ul>
      </div>
    </div>
  )
}

export default ToDoList;