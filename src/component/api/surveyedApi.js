export const sendAnswerList = async (answersForm) => {
    // try {
        const response = await fetch(`http://localhost:3012/surveyed/enteredForm`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body:JSON.stringify(answersForm)
        })

        const data = await response.json()
        return data.newForm;
    // }
    // catch (error) {
    //     console.log("Status Code is:" + error);
    // }
}
export const getRusltByFormId = async (formId) => {
    try {
        const response = await fetch(`http://localhost:3012/surveyed/getRusltByFormId/${formId}`)

        const data = await response.json()
        return data.form;
    }
    catch (error) {
        console.log("Status Code is:" + error);
    }
}
