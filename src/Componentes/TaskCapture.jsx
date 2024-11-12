import { useState } from 'react';

export const TaskCapture = () => {
  const [taskInfo, setTaskInfo] = useState({
    taskName: '',
    taskDetails: '',
  });
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskInfo({ ...taskInfo, [name]: value });
  };

  const handleAddTask = () => {
    if (taskInfo.taskName.trim() === '' || taskInfo.taskDetails.trim() === '') {
      alert('Por favor llena todos los campos antes de agregar la tarea.');
    } else {
      setTaskList([...taskList, taskInfo]);
      setTaskInfo({ taskName: '', taskDetails: '' });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-green-400 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Agregar Tarea</h2>
      <fieldset className="mb-4">
        <input
          type="text"
          name="taskName"
          value={taskInfo.taskName}
          onChange={handleInputChange}
          placeholder="Nombre de la tarea"
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="taskDetails"
          value={taskInfo.taskDetails}
          onChange={handleInputChange}
          placeholder="Descripción de la tarea"
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </fieldset>
      <button
        onClick={handleAddTask}
        className="bg-yellow-300 text-white px-6 py-2 rounded hover:bg-orange-600 mb-4"
      >
        Agregar Tarea
      </button>
      {taskList.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Tareas Guardadas:</h3>
          <ul className="list-disc list-inside">
            {taskList.map((task, index) => (
              <li key={index}>
                <strong>{task.taskName}:</strong> {task.taskDetails}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};