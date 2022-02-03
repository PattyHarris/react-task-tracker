import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';

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
      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : 
        ( 'No tasks available.')}
    </div>

  );
}

export default App;
