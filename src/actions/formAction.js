export const saveForm = (form) =>{
    sessionStorage.setItem('form', form)
    return function (dispatch){
        dispatch({
            type:"SAVE_FORM", 
            payload: form
        })
    }
}

export const saveAnswersList = (answers) =>{
    sessionStorage.setItem('AnswersList', answers)
    return function (dispatch){
        dispatch({
            type:"SAVE_ANSWERS", 
            payload: answers
        })
    }
}

export const saveQuestion = (question) =>{
    sessionStorage.setItem('saveQuestion', question)
    return function (dispatch){
        dispatch({
            type:"SAVE_QUESTION", 
            payload: question
        })
    }
}
export const saveEmails = (emails) =>{
    sessionStorage.setItem('saveEmails', emails)
    return function (dispatch){
        dispatch({
            type:"SAVE_EMAILS", 
            payload: emails
        })
    }
}
