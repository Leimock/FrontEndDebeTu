import { useState,useEffect } from "react"
import { addNewUser, fetchAllUsers } from "../services/userServices"

const SignUp = () => {

    const [usr, setUsr] = useState([])
    const [eml, setEml] = useState([])
    const [pass, setPass] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const json = await fetchAllUsers()
        const list = JSON.stringify(json)

        if (!list.includes(eml)) {
            const newUser = await addNewUser({userName: usr, userEmail: eml, userPassword: pass})
            console.log(newUser)
            // messages.push(newMessage)
            setUsr("")
            setEml("")
            setPass("")
        }
        else {
            alert("Email ya registrado")
        }


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