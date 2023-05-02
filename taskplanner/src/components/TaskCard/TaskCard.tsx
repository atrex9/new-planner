import { CardDiv, CompleteByHeader, NameHeader } from "./TaskCard.styles";

interface Task {
  task: string;
  create_date: string;
  complete_date: string;
  recurring?: boolean;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <CardDiv>
      <NameHeader>{task.task}</NameHeader>
      <CompleteByHeader>
        <p>Complete By</p>
        {new Date(task.complete_date).toLocaleString()}
      </CompleteByHeader>
    </CardDiv>
  );
};

export default TaskCard;
