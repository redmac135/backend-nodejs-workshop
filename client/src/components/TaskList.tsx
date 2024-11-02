import { Task } from '../types';
import TaskItem from './TaskItem';
import * as S from './TaskList.styles';

function TaskList({ tasks, onTaskDelete }: { tasks: Task[]; onTaskDelete: (id: number) => void }) {
  return (
    <div>
      <h1>Tasks</h1>
      <S.TaskListWrapper>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onTaskDelete={onTaskDelete} />
        ))}
      </S.TaskListWrapper>
    </div>
  )
}

export default TaskList;
