import { useEffect, useState } from "react";
import DebtForm from "../components/DebtForm";
import Debts from "../components/Debts";

const MyDebtors = () => {
    const [debtors, setDebtors] = useState([])


    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchingDebtors = async () => {
          const request = await fetch('http://localhost:3000/connection/getMyDebtors',
          {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token,
            }
          })
          const arrayDeConexiones = await request.json()
          setDebtors(arrayDeConexiones)
        }
    
        fetchingDebtors()
      }, [])

    async function handleRemoveDebt(idConnection, idDebt) {

      const token = localStorage.getItem("token")

        const response = await fetch('http://localhost:3000/connection/deleteDebt/' + idConnection,
        {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'bearer ' + token
            },
            body: JSON.stringify({_id: idDebt})
        })

        const data = await response.json()

        if (!response.ok) console.error('Fallo al borrar la deuda')
        else console.log(data)

        const newDebtors = [...debtors]

        const debtorsToRemoveDebt = newDebtors.find(e => e._id === idConnection)
        debtorsToRemoveDebt.debts = debtorsToRemoveDebt.debts.filter(e => e._id !== idDebt)
        setDebtors(newDebtors)
    }
    
    async function handleAddDebt(event, idConnection) {
      event.preventDefault()

      const concept = event.target.concept.value
      const amount = event.target.amount.value
      const token = localStorage.getItem("token")

        const response = await fetch('http://localhost:3000/connection/addDebt/' + idConnection,
        {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'bearer ' + token
            },
            body: JSON.stringify({concept, amount})
        })

        const data = await response.json()

        if (!response.ok) console.error('Error al añadir la deuda')
        else console.log(data)

        const newDebtors = [...debtors]
        const debtorsToAddDebt = newDebtors.find(e => e._id === idConnection)
        debtorsToAddDebt.debts.push({_id: data.debts[data.debts.length-1]._id, concept, amount, isPaid: data.debts[data.debts.length-1].isPaid})
        setDebtors(newDebtors)

        // const request = await fetch('http://localhost:3000/connection/getMyDebtors',
        //   {
        //     method: "GET",
        //     headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": "bearer " + token,
        //     }
        //   })
        //   const arrayDeConexiones = await request.json()
        //   setDebtors(arrayDeConexiones)

    }

    return <>
        <h1>Listado de mis deudores</h1>
        <ul>
        {debtors.map((debtor) => (
          <li key={debtor._id}>
            <h2>
              Deudor: {debtor.debtor.name} ({debtor.debtor.email})
            </h2>
            <Debts handleRemove={(idDebt) => handleRemoveDebt(debtor._id, idDebt)} debt={debtor.debts}/>
            <DebtForm handleAdd={(e) => handleAddDebt(e, debtor._id)}/>
            <br />
          </li>
        ))}
      </ul>
    </>
}

export default MyDebtors