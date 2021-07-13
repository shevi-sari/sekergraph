export const loginApi = (email, password) => {
    return fetch(`http://localhost:3000/login/${email}/${password}`)
        .then(response => {
            if (response.status == 401) {
                alert("שם משתמש או סיסמא אינם תקינים");
                throw new Error("Status Code is:" + response.status);
            }
            else if (response.ok) {
                response.json()
                    .then(data => {
                        console.log(data)
                        sessionStorage.setItem('User', JSON.stringify(data));
                        alert(email + " " + password + " " + "התחברת בהצלחה");
                    });
            }
            else {
                throw new Error("Status Code is:" + response.status);
            }
        })
}

