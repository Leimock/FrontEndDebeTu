import { useState,useEffect } from "react"
import { fetchAllUsers } from "../services/userServices"

const UsersOld = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)


    async function peticion() {
        const json = await fetchAllUsers()
        setUsers(json)
    }
    
    useEffect( () => {
        setLoading(true)
        peticion()
        setLoading(false)
        const programmer = setInterval( () => peticion() , 2000)
        return () => clearInterval(programmer)
    }, [])

    if (loading) return <div>Loading...</div>
    if (!users.length) return <div>No hay usuarios</div>

    return (
        <>
            <h1>Lista de usuarios ({users.length})</h1>
            <div>{users.map(user => 
                <div key={user._id}>
                    <div>- {user.name}</div>
                    <div>- {user.email}</div>
                    <br />
                </div>
            )}
            </div>
        </>
    )
}

export default UsersOld