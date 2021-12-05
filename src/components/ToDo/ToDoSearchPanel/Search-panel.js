import React,{useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

const SearchPanel = ({visibleSearch}) => {
  const [searchText,setSearchText]=useState('');
  const onTextSearch=(event)=>{
      setSearchText(event.target.value)
  }
  return (
    <>
    <input type="text"onChange={onTextSearch} placeholder="поиск" />
    <button onClick={()=>visibleSearch(searchText)}>Найти</button>
    </>
  );
};

export default connect(null,actions) (SearchPanel);