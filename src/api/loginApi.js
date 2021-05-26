export const loginApi = (email,password) => {
    fetch(`http://localhost:3000/login?user=${email}?password=${password}`)
        .then(response => {
            if (response.status == 204)
                alert("שם משתמש או סיסמא אינם תקינים");
            else if (response.ok) {
                response.json()
                    .then(data => {
                        console.log(data)
                        sessionStorage.setItem('oldUser', JSON.stringify(data));
                        alert(email + " " + password + " " + "התחברת בהצלחה");
                    });
            }
            else {
                throw new Error("Status Code is:" + response.status);
            }
        })
}

