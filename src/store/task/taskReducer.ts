import * as actionTypes from './models/actions'
import { Task } from './models/task'


const defaultState:Task = {
    description:[],
}

export const TaskReducer = (state = defaultState,action:actionTypes.TaskActionTypes) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return  {
                ...state,description:[...state.description,action.description]
            }
        default:
            return state
    }
}