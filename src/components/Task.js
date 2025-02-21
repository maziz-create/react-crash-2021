import { FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <Link to={`/tasks/${task.id}`}>Go to details</Link>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
