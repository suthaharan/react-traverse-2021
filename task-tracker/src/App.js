import Header from './components/Header'
import {useState} from 'react';
import Tasks from './components/Tasks'

const App = () => {
  const appTitle = "My Tasker!";
  const [tasks, setTasks] = useState([    {
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


  return (
    <div className="container">
      <Header title={appTitle} />
      <Tasks tasks={tasks}/>
    </div>
  );
}
export default App;
