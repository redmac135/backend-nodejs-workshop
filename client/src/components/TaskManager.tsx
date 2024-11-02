import { useState } from 'react';
import { Task } from '../types';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import * as S from './TaskManager.styles';

function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function onAddTask(text: string) {
    // get last id from tasks
    const lastId = tasks.length ? tasks[tasks.length - 1].id : 0;

    // add task to tasks
    setTasks([...tasks, { id: lastId + 1, text }]);
  }

  function onTaskDelete(id: number) {
    // filter tasks
    setTasks((tasks) => tasks.filter(task => task.id !== id));
  }

  return (
    <S.TaskListWrapper>
      <TaskInput onAddTask={onAddTask} />
      <TaskList tasks={tasks} onTaskDelete={onTaskDelete} />
    </S.TaskListWrapper>
  );
}

export default TaskManager;
