import { useEffect, useState } from "react"
import { addNewUser } from "../services/userServices"
import {useNavigate} from 'react-router-dom'

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

const useUsersAdd = () => {

    const [user, setUser] = useState(INITIAL_STATE)

    const navigate = useNavigate()

    const [error, setError] = useState(null)

    async function handleSubmit (e) {
        e.preventDefault() 
        
        const response = await addNewUser({name: user.name, email: user.email, password: user.password})

        if (!response.ok) {
            console.log('Error al hacer la inserción')
        }

        navigate('/userList')

    }

    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    useEffect( () => {

        if (user.name === '' ) {
            setError('El nombre no puede estar vacio')
            return 
        }
        if (user.name.length < 3 ) {
            setError('La longitud del nombre tiene que ser mayor de 2')
            return 
        }
        setError(null)
    }, [user.name] )

    return {user, error, handleSubmit, handleChange}

}

export default useUsersAdd