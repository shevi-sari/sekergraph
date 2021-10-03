const INITIAL_STATE = {
    form: '',
    answers: '',


}

export const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAVE_FORM':
            console.log("form.payload", action.payload);
            return {
                ...state, form: action.payload
            }
        case 'SAVE_ANSWERS':
            console.log("answers.payload", action.payload);
            return {
                ...state, answers: action.payload
            }
        case 'SAVE_QUESTION':
            console.log("question.payload", action.payload);
            return {
                ...state, question: action.payload
            }
        case 'SAVE_EMAILS':
            console.log("email.payload", action.payload);
            return {
                ...state, emails: action.payload
            }
        case 'RESET_REDUCER_GROUP':
            return { ...INITIAL_STATE };
        //case 'persist/REHYDRATE':
      //      return ({ tokenExpires: action.payload && action.payload.auth && action.payload.auth.tokenExpires } || {});
    //   return {
    //     INITIAL_STATE
    //   } 
   
      default:
            return state;
    }
}
// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case RESET_REDUCER_GROUP:
//             return { ...initialState };
//         default:
//             return state;
//             }
// }