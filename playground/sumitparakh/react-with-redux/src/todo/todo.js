import React, { createRef } from 'react';
import { connect } from 'react-redux';

const ToDo = (props) => {
    console.log({ props });

    const ref = createRef();

    return <div className="App">
        <div>
            <input placeholder="Enter ToDo Item" ref={ref}/>
            <button onClick={e => {
                props.dispatch({type: 'ADD_TODO', payload: ref.current.value })
                // store.dispatch({ type: 'ADD_TODO', payload: 'Hi' })
            }}>Add</button>
        </div>
        <div>
            <ul>

            </ul>
        </div>
    </div>;
}


export default connect()(ToDo);
