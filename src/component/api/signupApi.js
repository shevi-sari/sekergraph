export const signupApi = (user) => {
    console.log("user", user);
    return fetch(`http://localhost:3012/signUp`, {
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
                        alert("hello" + " " + user.name);
                    })
            } else {
                response.json()
                    .then(() => error1 => { alert(JSON.stringify(error1.errors)) })
                    .catch(error => { console.log(error); });
            }
        })
}