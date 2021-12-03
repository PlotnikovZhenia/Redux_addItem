import React from "react";
import TodoList from "./ToDo-list/todo-list";
import NewTodo from "./NewTodo/NewTodo";
import classes from'./ToDoMain.module.scss';

const ToDoComponent=()=>{
    return (
    <div>
        <div className={classes.todo_app}>
            <div className={classes.top_panel}>
                <NewTodo/>
            </div>
            <TodoList/>       
        </div>
    </div>
    );
  }
  
  export default ToDoComponent;
  