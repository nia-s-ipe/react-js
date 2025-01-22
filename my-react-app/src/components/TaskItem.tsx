import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask, markAsCompleted } = useContext(TaskContext)!;

  return (
    <tr>
      <td className="text-center">{task.title}</td>
      <td className="text-center">{task.description}</td>
      <td className="text-center">
        <small className={`text-${task.status === 'Completed' ? 'success' : 'warning'}`}>
          {task.status}
        </small>
      </td>
      <td className="text-center">{task.priority}</td>
      <td className="text-center">
        {task.status === 'Pending' && (
          <button
            onClick={() => markAsCompleted(task.id)}
            className="btn btn-primary btn-sm"
          >
            Mark as Completed
          </button>
        )}
      </td>
      <td className="text-center">
        <button
          onClick={() => deleteTask(task.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
