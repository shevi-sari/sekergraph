export const saveAnswer = (currentValue) => {
    return function (dispatch) {
        dispatch({
            
            type: "SAVE_ANSWER",
            payload: currentValue
        })
    }
}