import { combineReducers } from 'redux';
import taskReducer from "./task/taskReducer";
import boardReducer from "./board/boardReducer";

const rootReducer = combineReducers({
    task: taskReducer,
    board: boardReducer,
});

export default rootReducer;