import { useEffect, useState } from "react";
import DebtForm from "../components/DebtForm";
import Debts from "../components/Debts";

const MyDebtors = () => {
    const [debtors, setDebtors] = useState([])


    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchingDeptors = async () => {
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
    
        fetchingDeptors()
      }, [])

    return <>
        <h1>Listado de mis deudores</h1>
        <ul>
        {debtors.map((debtor) => (
          <li key={debtor._id}>
            <h2>
              Deudor: {debtor.debtor.name} ({debtor.debtor.email})
            </h2>
            <Debts debt={debtor.debts} connect={debtor._id}/>
            <DebtForm idConnection={debtor._id}/>
            <br />
          </li>
        ))}
      </ul>
    </>
}

export default MyDebtors