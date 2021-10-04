export const login = (user) => {
    return function (dispatch) {
        dispatch({
            type: "LOGIN",
            payload: user
        })
    }
}