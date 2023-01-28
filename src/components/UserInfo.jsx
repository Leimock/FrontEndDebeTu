import { useState,useEffect } from "react"
import { showMyData } from "../services/userServices"

const Info = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)


    async function peticion(data) {
        const json = await showMyData(data)
        setUsers(json)
    }
    
    useEffect( () => {
        setLoading(true)
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        peticion({token, email})
        setLoading(false)
        //const programmer = setInterval( () => peticion() , 2000)
        //return () => clearInterval(programmer)
    }, [])

    if (loading) return <div>Loading...</div>

/*<div>{users.map(user => 
    <div key={user._id}>
        <div>- {user.name}</div>
        <div>- {user.email}</div>
        <br />
    </div>
</div>
)}*/
    return (
        <>
            <h1>Mi información</h1>  
        </>
    )
}

export default Info