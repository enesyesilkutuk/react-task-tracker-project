import { FaTimes } from "react-icons/fa";

const Task = ({duty, deleteTask, toggleDone}) => {
  return (
    <div className={`task ${duty.isDone ? "done" : ""}`} onDoubleClick={() => toggleDone(duty.id)}>
      <h3>{duty.text} <FaTimes onClick={() => deleteTask(duty.id)} style={{color : "red", cursor : "pointer"}}/></h3>
      <p>{duty.day}</p>
    </div>
  )
}

export default Task
