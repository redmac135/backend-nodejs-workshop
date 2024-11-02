import { Task } from "../types";
import * as S from './TaskItem.styles';

function TaskItem({ task, onTaskDelete }: { task: Task; onTaskDelete: (id: number) => void }) {
  return (
    <S.TaskItemWrapper>
      <p>{task.text}</p>
      <S.TaskItemDeleteButton onClick={() => onTaskDelete(task.id)} />
    </S.TaskItemWrapper>
  );
}

export default TaskItem;
