import {ADD_ITEM} from './actionType';
  
  export const addItem = (text) => ({
    type: ADD_ITEM,
    payload: { text },
  });
