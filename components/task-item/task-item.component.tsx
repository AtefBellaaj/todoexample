import React from "react";
import { IToDoItem } from "../../index";
const TaskItem: React.FunctionComponent<ITaskItemProps> = ({
  onClickHandler,
  title,
  dueDate,
  id
}) => {
  return (
    <div
      className="task-item"
      onClick={() => {
        onClickHandler({ title, dueDate, id });
      }}
    >
      <span>{title}</span>
    </div>
  );
};

interface ITaskItemProps extends IToDoItem {
  onClickHandler: (taskItem: IToDoItem) => void;
}
export default TaskItem;
