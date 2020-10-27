import { connect } from 'react-redux';
import './App.css';
import { ToDo } from './todo';


function App(props) {
  return (
    <ToDo></ToDo>
  );
}

export default connect()(App);
