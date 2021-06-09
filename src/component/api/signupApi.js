export const signupApi = (user) => {

    return fetch(`http://localhost:3000/signup`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
    })
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(() => {
                        alert("hello" + " " + user.name)
                        return response.json();
                    })
            } else {
                response.json()
                    .then(() => error1 => { alert(JSON.stringify(error1.errors)) }).catch(error => { console.log(error); });
            }
        })
}