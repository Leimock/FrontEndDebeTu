import { useState } from "react"

const ConnectToCreditor = () => {

    const [eml, setEml] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = localStorage.getItem("token")

        const response = await fetch('http://localhost:3000/connection/connectToCreditor/' + eml,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'bearer ' + token
            }
        })

        if (!response.ok) console.error('Fallo al conectarse con el acreedor')
        else console.log('Todo bien')

        const data = await response.json()
        console.log(data)

    }

    return <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email" value={eml} onChange={ (e) => setEml(e.target.value)}/>
        <button type="submit" className="border-red-200">Conectar</button>
    </form>

}

export default ConnectToCreditor