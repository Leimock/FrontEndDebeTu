import { useState } from "react"
import {logIn} from '../services/userServices'

const Login = () => {

    const [eml, setEml] = useState([])
    const [pass, setPass] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault() 
        
        const response = await logIn({email: eml, password: pass})

        const json = await response.json()

        if (!response.ok) {
            console.log('Error al hacer login')
        } else {
            console.log(json.token)
            localStorage.setItem("token", json.token)
        }

    }

    return (
        <>
            <h1 className="flex flex-col mb-6">Loguearse</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="email  " name="email" value={eml} onChange={ (e) => setEml(e.target.value)}/>
                <input type="password" name="pass" value={pass} onChange={ (e) => setPass(e.target.value)}/>
                <button type="submit" className="border-red-200">Enviar</button>
            </form>
        </>
    )

}

export default Login