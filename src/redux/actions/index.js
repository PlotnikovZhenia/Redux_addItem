import {ADD_ITEM} from './actionType';
import {DELETE_ITEM} from './actionType';
import { VISIBLE_SEARCH } from './actionType';
import { CHANGE_ITEMDONE } from './actionType';
import { VISIBLE_ALLDONE } from './actionType';
import { VISIBLE_DONE } from './actionType';
import { VISIBLE_NOTDONE } from './actionType';
  
  export const addItem = (text) => ({
    type: ADD_ITEM,
    payload: { text }
  });
  export const deleteItem=(id)=>({
    type:DELETE_ITEM,
    payload:{id}
  })
  export const visibleSearch=(searchText)=>({
    type:VISIBLE_SEARCH,
    payload:{searchText}
  })
  export const changeItemDone=(id)=>({
    type:CHANGE_ITEMDONE,
    payload:{id}
  })
  export const visibleAllDone=()=>({
    type:VISIBLE_ALLDONE,
    payload:null
  })
  export const visibleDone=()=>({
    type:VISIBLE_DONE,
    payload:null
  })
  export const visibleNotDone=()=>({
    type:VISIBLE_NOTDONE,
    payload:null
  })

