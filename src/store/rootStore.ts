import { createStore,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TaskReducer } from './task/taskReducer'
export const rootReducer = combineReducers({
    task: TaskReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,composeWithDevTools())