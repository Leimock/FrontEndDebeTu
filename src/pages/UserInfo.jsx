import { useState,useEffect } from "react"
import { showMyData } from "../services/userServices"

const Info = () => {

    const [users, setUsers] = useState({})
    const [loading, setLoading] = useState(false)


    async function peticion(data) {
        const json = await showMyData(data)
        setUsers(json)
    }
    
    useEffect( () => {
        setLoading(true)
        const token = localStorage.getItem('token')
        peticion(token)
        setLoading(false)
    }, [])

    if (loading) return <div>Loading...</div>


    return (
        <>
            <h1>Mi información</h1>
            <div key={users._id}>
                <div>- {users.name}</div>
                <div>- {users.email}</div>
                <br />
            </div>
        </>
    )
}

export default Info