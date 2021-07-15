import Header from './components/Header'
import {useState} from 'react';
import Tasks from './components/Tasks'

const App = () => {
  const appTitle = "My Tasker!";
  const [tasks, setTasks] = useState([{
      id: 1,
      text: 'Doctor Appointment',
      day: 'Jan 1st at 1:40am',
      reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Mar 1st at 2:40pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Apr 1st at 5:40pm',
        reminder: false
    }]);

const deleteTask = (id) => {
  console.log("Delete ", id);
  setTasks(tasks.filter((task) => task.id!==id));
}

const toggleReminder = (id) => {
  console.log("Reminder ", id);
  setTasks(tasks.map((task) => task.id===id?{...task, reminder:!task.reminder}:task));
}

  return (
    <div className="container">
      <Header title={appTitle} />
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : ( 'No Tasks to Show!' )}
    </div>
  );
}
export default App;
