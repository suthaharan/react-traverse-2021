import Header from './components/Header'
import {useState} from 'react';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const appTitle = "Ace Tasker!";
  // To toggle the form
  const [showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState(
    [{
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
    }]
    );

const addTask = (task) => {
  console.log("Task ", task.id);
  const id = Math.floor(Math.random() * 10000 + 1);
  //console.log(id)
  const newTask = {id, ...task};
  setTasks([...tasks, newTask])
}

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

      <Header title={appTitle} onAddClick={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      
      { showAddTask && <AddTask onAdd={addTask} /> }
      
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : ( 'No Tasks To Show!' )}

    </div>
  );
}
export default App;
