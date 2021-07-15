import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
          {tasks.map((t) => (
              <Task key={t.id} task={t} onDelete={onDelete} onToggle={onToggle} />
          ))}  
        </>
    )
}

export default Tasks
