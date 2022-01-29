import Header from './components/Header'
import {useEffect, useState} from 'react';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  const appTitle = "Ace Tasker!";
  // To toggle the form
  const [showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState([]
    // [{
    //   id: 1,
    //   text: 'Doctor Appointment',
    //   day: 'Jan 1st at 1:40am',
    //   reminder: true
    // },
    // {
    //     id: 2,
    //     text: 'Meeting at School',
    //     day: 'Mar 1st at 2:40pm',
    //     reminder: true
    // },
    // {
    //     id: 3,
    //     text: 'Grocery Shopping',
    //     day: 'Apr 1st at 5:40pm',
    //     reminder: false
    // }]
    );

// Fetch tasks from json server
const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks"); //returns the promise
  const data = await res.json()
  console.log(data)
  return data;
}

// Fetch tasks from json server
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`); //returns the promise
  const data = await res.json()
  console.log(data)
  return data;
}

useEffect( () => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks();
    setTasks(tasksFromServer)
  }
  getTasks();

}, []); // dependency array at the end. pass in any value that you want this to depend on 

const addTask = async (task) => {
   console.log("Task ", task);
  // const id = Math.floor(Math.random() * 10000 + 1);
  // //console.log(id)
  // const newTask = {id, ...task};
  // setTasks([...tasks, newTask])

  const res = await fetch('http://localhost:5000/tasks', { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json', }, 
    body: JSON.stringify(task),
  });
  const data = await res.json();
  console.log(data);
  setTasks([...tasks, data]);

}

const deleteTask = async (id) => {
  console.log("Delete ", id);
  await fetch(`http://localhost:5000/tasks/${id}`, { method: 
'DELETE'})
  setTasks(tasks.filter((task) => task.id!==id));
}

const toggleReminder = async (id) => {
  console.log("Reminder ", id);
  const taskToToggle = await fetchTask(id);

  const updatedTask  = {...taskToToggle, reminder: !taskToToggle.reminder }
  console.log("Task to be updated ... ", updatedTask);

  const res = await fetch(`http://localhost:5000/tasks/${id}`, { 
    method: 'PUT', 
    headers: { 'Content-Type': 'application/json', }, 
    body: JSON.stringify(updatedTask),
  });
  const data = await res.json();

  // setTasks(tasks.map((task) => task.id===id?{...task, reminder:!task.reminder}:task));
  setTasks(tasks.map((task) => task.id===id?{...task, reminder:data.reminder}:task));
  

}

function Home(){
  return (
          <>
           { showAddTask && <AddTask onAdd={addTask} /> }
            {tasks.length > 0 ?
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
              : ( 'No Tasks To Show!' )}      
          </>
  )
}

  return (
    <Router>
      <div className="container">
      <Header title={appTitle} onAddClick={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
        
      <Footer />
      </div>
    </Router>
  );
}



export default App;
