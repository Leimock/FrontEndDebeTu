import { useEffect, useState } from "react"
import { fetchAllUsers } from "../services/userServices"

const useUsers = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect( () => {
        async function callApi () {
            setLoading(true)
            const request = await fetchAllUsers()
            if (!request.ok) setError('Fallo al conectamer al api')
            const json = await request.json()
            setUsers(json)
            setLoading(false)
        }
        callApi()
    }, [])

    return {users, loading}

}

export default useUsers