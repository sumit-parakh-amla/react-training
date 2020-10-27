import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * This reducer is called every time you dispatch an action.
 * Reducer is necessary to create/define a store object
 * Step #1
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state = {}, action) => {
  console.log({ state, action });
  switch (action?.type) {
    case 'ADD_TODO':
      state.todoList = state.todoList ?? [];
      state.todoList.push(action.payload);
      break;
  
    default:
      break;
  }
  return {...state};
}

/**
 * Step #2
 */
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
