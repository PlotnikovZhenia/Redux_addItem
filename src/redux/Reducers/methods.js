import {ADD_ITEM} from '../actions/actionType';
import { DELETE_ITEM } from '../actions/actionType';
import {VISIBLE_SEARCH} from '../actions/actionType';
import { CHANGE_ITEMDONE } from '../actions/actionType';
import { VISIBLE_ALLDONE } from '../actions/actionType';
import { VISIBLE_DONE } from '../actions/actionType';
import { VISIBLE_NOTDONE } from '../actions/actionType';
  
  const INITIAL_STATE= {
    beforeFilterDate:[],
    todoDate:[],
    beforeArray:[],
    countsDone:0,
    countsUnDone:0,
    countsAllDone:0
  };
  
   const Todo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_ITEM:
        return {
            beforeFilterDate:[
              ...state.beforeFilterDate,
                {
                  label:action.payload.text,
                  important: false,
                  done:false,
                  id:Date.now()
              }
            ],
            todoDate:[
              ...state.todoDate,
              {
                label:action.payload.text,
                important: false,
                done:false,
                id:Date.now()
            }
          ],
            countsAllDone:state.todoDate.length+1,
            countsDone:state.countsDone,
            countsUnDone:state.todoDate.length+1
         }
      case DELETE_ITEM:
        console.log(state.todoDate);
        console.log(state.beforeFilterDate);
        return {
        todoDate:[
          ...state.todoDate.filter((item)=>item.id!==action.payload.id)
        ],
        beforeFilterDate:[
          ...state.beforeFilterDate.filter((item)=>item.id!==action.payload.id)
        ],
        countsAllDone:state.todoDate.length-1,
        countsDone:state.countsDone,
        countsUnDone:state.todoDate.length-1
        }
        case VISIBLE_SEARCH:
          return {
          todoDate:[
            ...state.todoDate.filter((item)=>item.label.includes(action.payload.searchText))
          ],
          beforeFilterDate:[
            ...state.beforeFilterDate
          ],
          countsAllDone:state.countsAllDone,
          countsDone:state.countsDone,
          countsUnDone:state.countsUnDone
        }
        case CHANGE_ITEMDONE:
          return{
            todoDate:[
              ...state.todoDate.map((item) => {
            if (item.id === action.payload.id) {
              item.done = !item.done;
              return item;
            }
            return item;
          }),
            ],
            beforeFilterDate:[
              ...state.beforeFilterDate.map((item) => {
                if (item.id === action.payload.id) {
                  item.done = !item.done;
                  return item;
                }
                return item;
              }),
            ],
          countsAllDone:state.todoDate.length,
          countsDone:state.todoDate.filter((item)=>item.done===true).length,
          countsUnDone:state.todoDate.filter((item)=>item.done===false).length
          }
          case VISIBLE_ALLDONE:
            return {
              ...state,
              todoDate:[...state.beforeFilterDate],
              countsAllDone:state.todoDate.length,
              countsDone:state.countsDone,
              countsUnDone:state.countsUnDone
                }
          case VISIBLE_DONE:
            return {
              todoDate:[...state.todoDate.filter((item)=>item.done===true)],
              beforeFilterDate:[...state.beforeFilterDate],
              countsAllDone:state.todoDate.length,
              countsDone:state.countsDone,
              countsUnDone:state.countsUnDone
            }
          case VISIBLE_NOTDONE:
              return {
                todoDate:[...state.todoDate.filter((item)=>item.done===false)],
                beforeFilterDate:[...state.beforeFilterDate],
                countsAllDone:state.todoDate.length,
                countsDone:state.countsDone,
                countsUnDone:state.countsUnDone
              }
      default:
        return state;
    }
  };
  export default Todo;