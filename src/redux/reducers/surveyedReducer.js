const INITIAL_STATE = {
    answerList:[]
}

export const surveyedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAVE_ANSWER':
            console.log("sueveyed.payload", action.payload);
            return {
                ...state, answerList: action.payload
            }
       
        default:
            return state;
    }
}