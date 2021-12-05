import React from 'react';
import TodoListItem from './todo-list-item';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions';
import './todo-list.scss';

const TodoList= ({todoDate, deleteItem, changeItemDone}) => {
  const elements = todoDate.map((item, index) => {
    const { id, ...itemProps } = item;
    return (
      <tr key={id} className="table-group-item">
        <TodoListItem {...itemProps }  onDeleted={()=>deleteItem(id)} changeItemDone={()=>changeItemDone(id)} index={index} />
      </tr>
    );
  });
  return (
   <table className="table-group">
    <tbody>
      { elements }
    </tbody>
    </table>
  );
};
const mapStateToProps = (state) => {
  const {todoDate,beforeFilterDate} = state;
  return { todoDate,beforeFilterDate};
};

export default connect(mapStateToProps,actions) (TodoList);
