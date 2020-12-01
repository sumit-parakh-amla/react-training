## Redux
Redux is a tool that is used to manage application state.

![](images/1.png)

## What Can Redux Do?

Redux improves the aspects where React doesn’t do well like managing and maintaining complex state.

## State Management

**State is data that change from time to time.** From front-end perspective, state determines what’s displayed on the user interface.

What does state management mean? 

In general, there are three aspects of data that we’d need to manage in an app:

1. Fetching and storing data
2. Assigning data to UI elements
3. Changing data

## 1. Redux Installation

To use redux in react application, you will need to install few dependencies:-

1. redux
2. react-redux

## 2. Create Store

To create redux store, we use **createStore** method from **redux** library

##### Create Reducer:-

reducer is a function which accepts **state** and **action** as parameters.

```javascript
const reducer = (state, action) => {

    // It is important to return immutable state
    return {...state};
}
```

```javascript
import { createStore } from "redux";
const store = createStore(reducer);
```

## 3. Wrap component inside \<Provider\>

**Provider** is a react component which comes from **react-redux** library.

```javascript
<Provider store={<store>}>
    <Todo></Todo>
</Provider>

<Account></Account>
<Profile></Profile>
```

## 4. Use connect() method to connect React component with Redux

This function returns a react component with redux support

```javascript
connect()(<Component>)
```


Reference:-
https://www.smashingmagazine.com/2018/07/redux-designers-guide/

