import { useState,useEffect } from "react"
import { fetchAllUsers } from "../services/userServices"

const Users = () => {

    const [users, setUsers] = useState([])

    async function peticion() {
        const json = await fetchAllUsers()
        // console.log("Actualizacion")
        setUsers(json)
    }

    useEffect( () => {
        peticion()
    }, [])

    useEffect( () => {

        setInterval( () => peticion() , 2000)

    }, [])

    return (
        <>
            <h1>Lista de usuarios</h1>
            <div>{users.map(user => 
                <div key={user._id}>
                    <div>- {user.userName}</div>
                    <div>- {user.userEmail}</div>
                    <br />
                </div>
            )}
            </div>
        </>
    )
}

export default Users