
export const loginApi = (email, password) => {
    return fetch(`http://localhost:3012/login/${email}/${password}`)
        .then(response => {
            if (response.status === 401) {
                alert("שם משתמש או סיסמא אינם תקינים");
                console.log("Status Code is:" + response.status);
            }
            else if (response.ok) {
                alert(email + " " + password + " " + "התחברת בהצלחה");
                return response.json()
                    .then(data => {
                        console.log(data)

                        return data.user
                    });

            }
            else {
                console.log("Status Code is:" + response.status);
            }
        })
}

