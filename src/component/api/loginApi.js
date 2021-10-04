
export const loginApi = (email, password) => {
    return fetch(`http://localhost:3000/login/${email}/${password}`)
        .then(response => {
            if (response.status === 401) {
                alert("שם משתמש או סיסמא אינם תקינים");
                console.log("Status Code is:" + response.status);
            }
            else if (response.ok) {
                response.json()
                    .then(data => {
                        console.log(data)
                       // localStorage.setItem('User', JSON.stringify(data.user));
                        alert(email +  " " + "התחברת בהצלחה");
                    });
            }
            else {
                console.log("Status Code is:" + response.status);
            }
        })
}

