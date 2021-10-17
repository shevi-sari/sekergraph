const INITIAL_STATE = {
    //user: ''

}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log("user.payload", action.payload);

            return {
                ...state, user: action.payload
            }
            case 'RESET_REDUCER_GROUP':
                return { ...INITIAL_STATE };
        default:
            return state;
    }
}