import {useState} from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
    },
    {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
    },
    {
        "id": 3,
        "text": "Food shopping",
        "day": "Feb 5th at 2:30pm",
        "reminder": false
    }  
  ])

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

      <Header title="Task Tracker"/>
      <AddTask onAdd={addTask} />

      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : 
        ( 'No tasks available.')}
    </div>

  );
}

export default App;
