async function fetchAllUsers() {
    const response = await fetch(import.meta.env.VITE_BACKEND + 'user/listAll')
    return response
}

async function addNewUser(data) {

    const response = await fetch(import.meta.env.VITE_BACKEND + 'user/add',
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
    const response = await fetch(import.meta.env.VITE_BACKEND + 'auth/login',
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
    const response = await fetch(import.meta.env.VITE_BACKEND + 'user/me',
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