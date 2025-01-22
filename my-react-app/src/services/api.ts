import { Task } from '../types/task';

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=7');
    const data = await response.json();
    return data.map((task: any) => ({
      id: task.id,
      title: task.title,
      description: task.title,
      status: task.completed ? 'Completed' : 'Pending',
      priority: 'Low', // Default priority
    }));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};
