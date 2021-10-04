const INITIAL_STATE = {
    user: ''

}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log("user.payload", action.payload);

            return {
                ...state, user: action.payload
            }

        default:
            return state;
    }
}