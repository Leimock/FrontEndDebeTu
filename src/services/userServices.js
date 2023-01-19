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
        if (!response.ok) {
            console.log('Error al hacer la inserción')
        }

        const newUser = await response.json()

        return newUser
}

export {fetchAllUsers, addNewUser}