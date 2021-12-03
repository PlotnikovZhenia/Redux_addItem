import { createStore } from 'redux';
import Todo from './Reducers/methods';

export const store = createStore(Todo);