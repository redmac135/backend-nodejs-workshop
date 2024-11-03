import { useEffect, useState } from 'react';
import { Task } from '../types';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import * as S from './TaskManager.styles';
import api from '../api';

function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const setTasksFromApi = async () => {
      const tasks = await api.getTasks();
      setTasks(tasks);
    }

    setTasksFromApi();
  }, [])

  function onAddTask(text: string) {
    // get last id from tasks
    const lastId = tasks.length ? tasks[tasks.length - 1].id : 0;

    // add task to api
    api.addTask({ id: lastId + 1, text: text }).then((task) => {
      setTasks([...tasks, task]);
    });
  }

  function onTaskDelete(id: number) {
    // delete task from api
    api.deleteTask(id).then(() => {
      setTasks((tasks) => tasks.filter(task => task.id !== id));
    });
  }

  return (
    <S.TaskListWrapper>
      <TaskInput onAddTask={onAddTask} />
      <TaskList tasks={tasks} onTaskDelete={onTaskDelete} />
    </S.TaskListWrapper>
  );
}

export default TaskManager;
