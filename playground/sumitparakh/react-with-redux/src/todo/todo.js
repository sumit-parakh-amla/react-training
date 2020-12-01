import React, { createRef } from 'react';
import { connect } from 'react-redux';

const ToDo = (props) => {
    console.log({ props });

    const ref = createRef();

    const updateDescription = (e) => {
        console.log({value: ref.current.value});
        props.dispatch({
            type: 'UPDATE_DESCRIPTION',
            payload: ref.current.value
        })
    }

    return <div className="App">
        {props.description}
        <div>
            <input placeholder="Enter Description" ref={ref} />
        </div>
        <button onClick={updateDescription} type="button">Update Description</button>
    </div>;
}

const mapStateToProps = (state) => {
    console.log({mapStateToProps: state});
    return {...state.profile};
};

export default connect(mapStateToProps)(ToDo);
