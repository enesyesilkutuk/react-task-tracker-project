import Task from "./Task"

const Tasks = ({tasks, deleteTask, toggleDone, deleteAllTasks }) => {
  return (
    <div>
 {
   tasks.map(task => (
     <Task duty = {task} key={task.id} deleteTask = {deleteTask} toggleDone = {toggleDone}/>
   ))
 }
 <button className="btn-delete" onClick={deleteAllTasks}>Delete All Tasks</button>
    </div>
  )
}

export default Tasks
