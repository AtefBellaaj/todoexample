import React, { useState } from "react";
import { IToDoItem } from "../../index";
import TaskItem from "../task-item/task-item.component";
const TaskItemsList: React.FunctionComponent<ITaskItemsListProps> = ({
  taskList,
  taskItemClicked,
  submitTaskHandler
}) => {
  const [inputValue, setInputValue] = useState("");

  const submitTask = () => {
    if (inputValue == "") return;
    submitTaskHandler({
      id: Math.floor(Math.random() * 9999999) + 1,
      dueDate: new Date(),
      title: inputValue
    });
    setInputValue("");
  };
  return (
    <div className="task-items-list">
      <div className="add-task-input">
        <input
          type="text"
          value={inputValue}
          onKeyDown={e => {
            console.log(e.key);
            if (e.key == "Enter") {
              submitTask();
            }
          }}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
        <button type="button" onClick={submitTask}>
          Submit
        </button>
      </div>

      {taskList.map(item => {
        return (
          <TaskItem {...item} onClickHandler={taskItemClicked} key={item.id} />
        );
      })}
    </div>
  );
};

interface ITaskItemsListProps {
  taskList: IToDoItem[];
  taskItemClicked: (taskItem: IToDoItem) => void;
  submitTaskHandler: (taskItem: IToDoItem) => void;
}
export default TaskItemsList;
