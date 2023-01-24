import { useState } from "react"
import { addNewUser } from "../services/userServices"
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    const [usr, setUsr] = useState([])
    const [eml, setEml] = useState([])
    const [pass, setPass] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault() 
        
        const response = await addNewUser({name: usr, email: eml, password: pass})

        if (!response.ok) {
            console.log('Error al hacer la inserción')
        }

        navigate('/userList')

    }

    return (
        <>
            <h1 className="flex flex-col mb-6">Registrarse</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" name="user" value={usr} onChange={ (e) => setUsr(e.target.value)}/>
                <input type="email  " name="email" value={eml} onChange={ (e) => setEml(e.target.value)}/>
                <input type="password" name="pass" value={pass} onChange={ (e) => setPass(e.target.value)}/>
                <button type="submit" className="border-red-200">Enviar</button>
            </form>
        </>
    )

}

export default SignUp