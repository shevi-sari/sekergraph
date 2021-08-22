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
            }
        })

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
            }
        })

        const data = await response.json()
        console.log(data, "*************")
        return data.listOfEmails;
    }
    catch (error) {
        console.log("Status Code is:" + error);
    }
}

export const sendForm = async () => {
    ;
    try {
        alert('its work!!')
        console.log('its work');
        var form = JSON.parse(sessionStorage.getItem('newForm'));

        const response = await fetch(`http://localhost:3000/form/sendEmail/${form._id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })

        const data = await response.json()
        return data.newForm;
    }
    catch (error) {
        console.log("Status Code is:" + error);
    }
}

export const toSaveForm = () => {
    const myForm = JSON.parse(sessionStorage.getItem('form'))
    return fetch(`http://localhost:3000/form/newForm`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(myForm),
    })
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(() => {
                        alert("saved successfully" + " " + response.name);
                    })
            } else {
                response.json()
                    .then(() => error1 => { alert(JSON.stringify(error1.errors)) })
                    .catch(error => { console.log(error); });
            }
        })
}