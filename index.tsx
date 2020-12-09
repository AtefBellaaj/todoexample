import React, { Component } from "react";
import { render } from "react-dom";
import TaskItem from "./components/task-item/task-item.component";
import TaskItemsList from "./components/task-items-list/task-items-list.component";
import Hello from "./Hello";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
  toDoList: IToDoItem[];
}
export interface IToDoItem {
  id: number;
  title: string;
  dueDate: Date;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      toDoList: [
        { id: 131231, title: "tdsfdsafsadfsadfest", dueDate: new Date() },
        { id: 131232, title: "test2", dueDate: new Date() },
        { id: 131233, title: "test3", dueDate: new Date() },
        { id: 131234, title: "test4", dueDate: new Date() }
      ]
    };
  }
  taskItemClicked = (taskItem: IToDoItem) => {
    alert(`item clicked: id ${taskItem.id}, title: ${taskItem.title}`);
    let newList = [...this.state.toDoList];
    newList = newList.filter(items => items.id != taskItem.id);
    this.setState({ toDoList: newList });
  };
  submitTaskHandler = (taskItem: IToDoItem) => {
    let newList = [...this.state.toDoList];
    newList.unshift(taskItem);
    this.setState({ toDoList: newList });
  };
  render() {
    const { toDoList, name } = this.state;
    return (
      <div>
        <Hello name={name} />
        <p>Start editing to see some magic happen :)</p>
        <TaskItemsList
          taskList={toDoList}
          taskItemClicked={this.taskItemClicked}
          submitTaskHandler={this.submitTaskHandler}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
