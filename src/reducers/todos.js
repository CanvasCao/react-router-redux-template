import {ADD_TODO, TOGGLE_TODO} from '../actions/action'

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: !state[action.index].completed
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

export {todos}
