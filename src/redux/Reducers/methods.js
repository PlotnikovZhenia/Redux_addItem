import {ADD_ITEM} from '../actions/actionType';
  
  const INITIAL_STATE= {
    todoDate:[],
    beforeFilterDate:[],
    beforeArray:null,
    countsDone:0,
    countsUnDone:0,
    countsAllDone:0
  };
  
   const Todo = (state = INITIAL_STATE, action) => {
     console.log(state.todoDate)
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
            todoDate:[
                ...state.todoData,
                {
                  label:action.payload.text,
                  important: false,
                  done:false,
                  id:Date.now()
              }
            ]
         }
      default:
        return state;
    }
  };
  export default Todo;