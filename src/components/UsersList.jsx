import { useState,useEffect } from "react"
import { fetchAllUsers } from "../services/userServices"

const Users = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)


    async function peticion() {
        setLoading(true)
        const json = await fetchAllUsers()
        // console.log("Actualizacion")
        setUsers(json)
        setLoading(false)
    }

    useEffect( () => {
        peticion() 
    }, [])

    useEffect( () => {

        setInterval( () => peticion() , 2000)

    }, [])

    if (loading) return <div>Loading...</div>
    if (!users.length) return <div>No hay usuarios</div>

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