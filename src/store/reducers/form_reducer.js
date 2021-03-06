//Will hold the reducer to read and update state properties related to our form

import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
    user_textChange: "",
    user_textSubmit: ""
}

export const FormReducer = (state, action) => {
    switch (action.type){
        case ACTION_TYPES.USER_INPUT_SUBMIT:
            return {
                ...state,
                user_textSubmit: action.payload
            }
        case ACTION_TYPES.USER_INPUT_CHANGE:
            return {
                ...state,
                user_textChange: action.payload
            }
        default:
            throw new Error();
    }
}

/*
* Here we have 2 properties for a form. Our first property tracks changes to the input element and
*  our second property adds the submitted form to the global state.
* */