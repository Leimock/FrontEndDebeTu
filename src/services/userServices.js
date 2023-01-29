async function fetchAllUsers() {
    const response = await fetch('http://localhost:3000/user/listAll')
    const json = await response.json()
    return json
}

async function addNewUser(data) {

    const response = await fetch('http://localhost:3000/user/add',
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })

        return response
}

async function logIn(data) {
    const response = await fetch('http://localhost:3000/auth/login',
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })

        return response
}

async function showMyData(data) {
    const response = await fetch('http://localhost:3000/user',
        {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'bearer ' + data
            }
        })

        const json = await response.json()
        return json
}

export {fetchAllUsers, addNewUser, logIn, showMyData}