import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Dashboard from './pages/Dashboard';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
        <TaskForm />
        <Dashboard />
      </div>
    </TaskProvider>
  );
};

export default App;
