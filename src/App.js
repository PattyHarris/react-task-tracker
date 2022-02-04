import {useState, useEffect} from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([])

  useEffect( () => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  })

  // Fetch tasks.
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  }

  // Add a task - uses a random number for the new ID...
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Delete the task - prop passed to Task.
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id));
  }

  // Toggle the reminder flag.  Create a new list where if we find the task with this ID,
  // copy over all the data (spread operator) except the reminder, which is set as as the 
  // opposite of its  current value.
  const toggleReminder = (id) => {
    setTasks(
      tasks.map( (task) => task.id === id ? { ...task, reminder: !task.reminder }
                                          : task )
    )
  }

  return (
    <div className="container">

      <Header onAdd={ () => setShowAddTask(!showAddTask) } showAdd={ showAddTask }/>

      { showAddTask && <AddTask onAdd={addTask} /> }

      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : 
        ( 'No tasks available.')}
    </div>

  );
}

export default App;
