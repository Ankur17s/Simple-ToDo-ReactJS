import React, { useState } from 'react';
import './App.css'

const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [listValue, setListValue] = useState([]);
  // console.log(inputValue);

  // Add todo
  const getInputValue = () => {
    if (inputValue) {
      setListValue([...listValue, inputValue]);
      setInputValue('');
    }
  }

  // Delete todo
  const deleteListItem = (id) => {
    const updatedList = listValue.filter((elem, idx) => {
      return idx !== id;
    })
    setListValue(updatedList);
  }

  // Remove all list
  const removeAll = () => {
    setListValue([])
  }

  return (
    <>
      <div className='main-container'>

        <div className='todo-container'>

          <div className='todo-head'>
            <span>To-Do List</span>
          </div>

          <div className='todo-input'>
            <input placeholder='writes your notes...'
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue} />
            <div className='todo-add'><button onClick={getInputValue}>Add</button></div>
          </div>

          {
            listValue.map((item, idx) =>
              <div className='list-container' key={idx}>
                <div className='todo-notes'><span>{item}</span></div>
                <div className='todo-delete'><button onClick={() => deleteListItem(idx)}>delete</button></div>
              </div>
            )
          }

          {
            listValue.length > 1 ? <div className='todo-remove'>
              <div className='clear-todo' onClick={removeAll}>
                <button>Remove All</button>
              </div>
            </div> : null
          }


        </div>

      </div>
    </>
  )
}

export default App
