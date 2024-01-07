import React, { useState } from 'react';
import './TodoList.css';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
    //setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className='App'>
      <div className='addTask'>
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className='List'>
        {todoList.map((task) => (
          <div key={task.id}>
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
