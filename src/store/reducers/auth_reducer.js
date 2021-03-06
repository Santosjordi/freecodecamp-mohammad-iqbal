//Will hold the reducer to read and update state properties related authentication

import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
    is_authenticated: false,
    profile: null
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_SUCCESS :
            return {
                ...state,
                is_authenticated: true
            }
        case ACTION_TYPES.LOGIN_FAILURE :
            return {
                ...state,
                is_authenticated: false
            }
        case ACTION_TYPES.ADD_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case ACTION_TYPES.REMOVE_PROFILE:
            return {
                ...state,
                profile: null
            }
        default:
            return state
    }
}

/*
* Here we have our auth_reducer.js that will hold our state properties and
*  associated actions for user authentication status and user profile data.
* */