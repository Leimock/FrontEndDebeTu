async function fetchAllUsers() {
    const response = await fetch('http://localhost:3000/user/')
    const json = await response.json()
    return json
}

async function addNewUser(data) {

    const response = await fetch('http://localhost:3000/user/',
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })

        return response
}

export {fetchAllUsers, addNewUser}