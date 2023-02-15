import { useState } from "react"

const DebtForm = (props) => {

    const [concept, setConcept] = useState("")
    const [amount, setAmount] = useState("")

    return <form onSubmit={(e) => props.handleAdd(e)} className="flex gap-4">
        <input type="text" name="concept" id="concept" placeholder="concepto" value={concept} onChange={ (e) => setConcept(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <input type="number" name="amount" id="amount" placeholder="cantidad" value={amount} onChange={ (e) => setAmount(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <button type="submit" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Añadir</button>
    </form>

}

export default DebtForm