export const saveForm = (myForm) => {
    return function (dispatch) {
        dispatch({
            type: "SAVE_FORM",
            payload: myForm
        })
    }
}
export const saveAnswersList = (answers) => {
    return function (dispatch) {
        dispatch({
            type: "SAVE_ANSWERS",
            payload: answers
        })
    }
}
export const saveQuestion = (question) => {
    return function (dispatch) {
        dispatch({
            type: "SAVE_QUESTION",
            payload: question
        })
    }
}
export const saveEmails = (emails) => {
    return function (dispatch) {
        dispatch({
            type: "SAVE_EMAILS",
            payload: emails
        })
    }
}
export const initialState = () => {
    return function (dispatch) {
        dispatch({
            type: 'RESET_REDUCER_GROUP',
            payload: null
        })
    }
} 
export const initialForm = () => {
    return function (dispatch) {
        dispatch({
            type: 'RESET_REDUCER_FORM',
            payload: null
        })
    }
} 