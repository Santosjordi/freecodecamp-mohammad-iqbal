//Will hold the actual actions that are going to be used in the reducer to update the state

import * as ACTION_TYPES from './action_types'

export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}


export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}

export const login_success = () => {
    return {
        type: ACTION_TYPES.LOGIN_SUCCESS
    }
}

export const login_failure = () => {
    return {
        type: ACTION_TYPES.LOGIN_FAILURE
    }
}


export const add_profile = (profile) => {
    return {
        type: ACTION_TYPES.ADD_PROFILE,
        payload: profile
    }
}

export const remove_profile = () => {
    return {
        type: ACTION_TYPES.REMOVE_PROFILE
    }
}

export const user_input_change = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT_CHANGE,
        payload: text
    }
}

export const user_input_submit = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT_SUBMIT,
        payload: text
    }
}

//To keep things simple I have made all the actions into action creators instead of having some as actions and some as action creators.