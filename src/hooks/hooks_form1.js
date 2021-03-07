/*
* Will have a form that has all three ways to update state with useState, useReducer and useContext.
* */

import React, { useContext, useState, useReducer } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as FormReducer from '../store/reducers/form_reducer';
import Context from '../utils/context';

const HookForm1 = () => {
    const context = useContext(Context)

    const [valueChange, setValueChange] = useState('')
    const [valueSubmit, setValueSubmit] = useState('')

    const [state, dispatch] = useReducer(FormReducer.FormReducer, FormReducer.initialState);

    const handleUseStateChange = (event) => (
        setValueChange(event.target.value)
    );

    const handleUseStateSubmit = (event) => {
        event.preventDefault();
        setValueSubmit(event.target.useState.value)
    };

    const handleUseReducerChange = (event) => (
        dispatch(ACTIONS.user_input_change(event.target.value))
    );

    const handleUseReducerSubmit = (event) => {
        event.preventDefault();
        dispatch(ACTIONS.user_input_submit(event.target.useReducer.value))
    };

    return (
        <div>
            <form onSubmit={handleUseStateSubmit}>
                <label>React useState:</label>
                <input id='useState' onChange={handleUseStateChange} type='text'/>
                <button type='submit'> Submit </button>
            </form>
            <br />
            <form onSubmit={context.useContextSubmit}>
                <label> React useContext: </label>
                <input id="useContext" onChange={context.useContextChange} type="text" />
                <button type="submit"> Submit </button>
            </form>
            <br />

            <h3>React useState:</h3>
            <p>Change: {valueChange}</p>
            <p>Submit: {valueSubmit}</p>

            <h3>React useReducer:</h3>
            <p>Change: {state.user_textChange}</p>
            <p>Submit: {state.user_textSubmit}</p>
            <br />
            <h3>React useContext:</h3>
            <p>Change: {context.useContextChangeState}</p>
            <p>Submit: {context.useContextSubmitState}</p>
            <br />
            <br />
        </div>
    )
}

export default HookForm1;