export const getFormsByManeger = async () => {
    try {
        var User = JSON.parse(sessionStorage.getItem('User'));

        const response = await fetch(`http://localhost:3000/form/getFormsById/${User.user._id}`)
        const data = await response.json()
        console.log(data)
        return data.listOfForms;
    }
    catch(error) {
       console.log("Status Code is:" + error);
    }
}

