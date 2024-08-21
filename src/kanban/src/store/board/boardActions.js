import {ADD_BOARD, UPDATE_BOARD_TITLE} from "./boardActionTypes";

export const addBoard = (board) => {
    return {
        type: ADD_BOARD,
        payload: board
    }
}

export const updateBoard = (board) => {
    return {
        type: UPDATE_BOARD_TITLE,
        payload: board
    }
}