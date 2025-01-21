import React, { createContext, useState, ReactNode } from 'react';
import { Task } from '../types/task'

interface TaskContextType { 
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
  markAsCompleted: (taskId: number) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const markAsCompleted = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Completed' } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, deleteTask, markAsCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};
