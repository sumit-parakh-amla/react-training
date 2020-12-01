import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import { Profile } from './profile/Profile';
import { ToDo } from './todo';

const DEFAULT_STATE = {
  profile: {
    description: 'This is the profile of Amla Dev Team'
  }
};

const reducer = (state = DEFAULT_STATE, action) => {
  console.log({ state, action });

  if(action.type === 'UPDATE_DESCRIPTION') {
    state.profile.description = action.payload;
  }

  return { ...state };
}

const store = createStore(reducer);

function App(props) {
  return (
    <>
      <Provider store={store}>
        <ToDo name={'Sumit'}></ToDo>
      </Provider>
      <Profile></Profile>
    </>
  );
}

export default App;
