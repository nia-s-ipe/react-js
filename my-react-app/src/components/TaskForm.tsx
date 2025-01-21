import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types/task';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');
  const { addTask } = useContext(TaskContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required!");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      priority,
      status: 'Pending',
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setPriority('Low');
    alert("Task added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="taskTitle">Title</label>
        <input
          id="taskTitle"
          type="text"
          className="form-control"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="taskDescription">Description</label>
        <textarea
          id="taskDescription"
          className="form-control"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          className="form-control"
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button type="submit" className="btn btn-success mt-3">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
