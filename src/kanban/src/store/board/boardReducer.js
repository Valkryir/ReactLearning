import {ADD_BOARD, UPDATE_BOARD_TITLE} from "./boardActionTypes";
import taskReducer from "../task/taskReducer";

const initialState = {
    boards: [],
    boardTitle: "",
};

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOARD:
            return {
                ...state,
                boards: [...state.boards, action.payload],
                boardTitle: ""
            }
        case UPDATE_BOARD_TITLE:
            return {
                ...state,
                boardTitle: action.payload,
            }
        default:
            return state;
    }
}

export default boardReducer;