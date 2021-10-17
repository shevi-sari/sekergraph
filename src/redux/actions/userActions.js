export const login = (user) => {
    return function (dispatch) {
        dispatch({
            type: "LOGIN",
            payload: user
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