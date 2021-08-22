const INITIAL_STATE = {
    form: '',
    answers: ''
}

export const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAVE_FORM':
            console.log("form.payload", action.payload);
            return {
                ...state, form: action.payload.form
            }
        case 'SAVE_ANSWERS':
            console.log("answers.payload", action.payload);
            return {
                ...state, answers: action.payload.answers
            }
        case 'SAVE_QUESTION':
            console.log("question.payload", action.payload);
            return {
                ...state, question: action.payload.question
            }
        case 'SAVE_EMAILS':
            console.log("email.payload", action.payload);
            return {
                ...state, emails: action.payload.emails
            }
        default:
            return state;
    }
}