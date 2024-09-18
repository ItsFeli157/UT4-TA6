import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para la lista de tareas y la tarea actual
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  // Maneja el cambio en el campo de entrada
  const handleChange = (event) => {
    setCurrentTask(event.target.value);
  };

  // Maneja el envío del formulario para agregar una tarea
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask]);
      setCurrentTask(''); // Limpia el campo de entrada
    }
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTask}
          onChange={handleChange}
          placeholder="Agregar una nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
