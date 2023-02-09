import { useState } from "react"
import {logIn} from '../services/userServices'
import {useNavigate} from 'react-router-dom'
import Button from "../components/Button"

const Login = () => {

    const [eml, setEml] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate('')

    const handleSubmit = async (e) => {
        e.preventDefault() 
        
        const response = await logIn({email: eml, password: pass})

        const json = await response.json()

        if (!response.ok) {
            console.log('Error al hacer login')
        } else {
            console.log(json.token)
            localStorage.setItem("token", json.token)
            navigate('/myInfo')
        }

    }

    return (
        <>
            <h1 className="flex flex-col mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="mb-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email" value={eml} onChange={ (e) => setEml(e.target.value)}/>
            </div>    

            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="pass" value={pass} onChange={ (e) => setPass(e.target.value)}/>
            </div>
                <Button>Login</Button>
            </form>
        </>
    )

}

export default Login