export const getEmailByForm = async () => {
    try {
        var form = JSON.parse(sessionStorage.getItem('form'));

        const response = await fetch(`http://localhost:3000/form/getEmailByForm/${form._id}`)
        const data = await response.json()
        console.log(data)
        return data.listOfEmails;
    }
    catch (error) {
        console.log("Status Code is:" + error);
    }
}
export const getEmailByManeger = async () => {
    try {
        var User = JSON.parse(sessionStorage.getItem('User'));

        const response = await fetch(`http://localhost:3000/form/getEmailByManeger/${User.user._id}`)
        const data = await response.json()
        console.log(data)
        return data.listOfEmails;
    }
    catch (error) {
        console.log("Status Code is:" + error);
    }
}

export const addEmail = async (email) => {
    try {
        var form = JSON.parse(sessionStorage.getItem('form'));

        const response = await fetch(`http://localhost:3000/form/addEmail/${form._id}/${email}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
        }})

        const data = await response.json()
        console.log(data)
        return data.listOfEmails;
    }
    catch (error) {
        console.log("Status Code is:" + error);
    }
}
export const removeEmail = async (email) => {
    try {
        var form = JSON.parse(sessionStorage.getItem('form'));

        const response = await fetch(`http://localhost:3000/form/removeEmail/${form._id}/${email}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
        }})

        const data = await response.json()
        console.log(data,"*************")
        return data.listOfEmails;
    }
    catch (error) {
        console.log("Status Code is:" + error);
    }
}
