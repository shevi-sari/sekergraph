
export const loginApi = (email, password) => {
    return fetch(`http://localhost:3012/login/${email}/${password}`)
        .then(response => {
            if (response.status === 401) {
                return 401
            }
            else if (response.ok) {
                return response.json()
                    .then((data) => {
                        return data.user
                    });
            }
            else { console.log("Status Code is:" + response.status); }
        })
        .catch((err) => console.log(err))
}