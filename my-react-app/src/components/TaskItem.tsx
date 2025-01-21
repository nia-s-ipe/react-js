import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask, markAsCompleted } = useContext(TaskContext)!;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <p className="card-text">
            <small className={`text-${task.status === 'Completed' ? 'success' : 'warning'}`}>
              {task.status}
            </small>
          </p>
          <p className="card-text">Priority: {task.priority}</p>
          <div className="d-flex justify-content-between">
            {task.status === 'Pending' && (
              <button
                onClick={() => markAsCompleted(task.id)}
                className="btn btn-primary"
              >
                Mark as Completed
              </button>
            )}
            <button
              onClick={() => deleteTask(task.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
