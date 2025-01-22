import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';
import StatusDropdown from '../components/StatusDropdown';
import { fetchTasks } from '../services/api';
import { Task } from '../types/task';

const Dashboard: React.FC = () => {
  const { tasks, setTasks } = useContext(TaskContext)!;
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };

    loadTasks();
  }, [setTasks]);

  useEffect(() => {
    let filtered = tasks;
    if (searchTerm) {
      filtered = filtered.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (statusFilter) {
      filtered = filtered.filter(task => task.status === statusFilter);
    }
    setFilteredTasks(filtered);
  }, [tasks, searchTerm, statusFilter]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Task Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StatusDropdown statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
      
      {/* Task List Grid */}
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default Dashboard;
