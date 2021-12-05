import React,{useState} from'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

const NewTodo=({addItem})=>{
    const [text,setText]=useState('');
    const textInput=(event)=>{
        setText(event.target.value);
    }
const pushItem=()=>{
    if(text){
    addItem(text);
    setText('');
    }
}
    return(
    <>
        <input type="text" value={text} placeholder="добавить" onChange={textInput}/>
        <button onClick={pushItem} >
            Добавить пункт
        </button>
    </>
    )
}


export default connect(null, actions) (NewTodo);