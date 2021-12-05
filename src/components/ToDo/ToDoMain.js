import React from "react";
import ToDoHeader from "./ToDoHeader/ToDoHeader";
import TodoList from "./ToDo-list/todo-list";
import Information from "./Information/Information";
import SearchPanel from "./ToDoSearchPanel/Search-panel";
import NewTodo from "./NewTodo/NewTodo";
import classes from'./ToDoMain.module.scss';

const ToDoComponent=()=>{
    return (
    <div>
        <div className={classes.todo_app}>
        <ToDoHeader/>
            <div className={classes.top_panel}>
                <SearchPanel/>
                <NewTodo/>
            </div>
            <TodoList/>   
            <Information/>    
        </div>
    </div>
    );
  }
  
  export default ToDoComponent;
  