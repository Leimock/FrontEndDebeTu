const Debts = (props) => {

    const debts = props.debt
    
    if (!debts.length) return 'No hay deudas'

    const sum = debts.filter(d => !d.isPaid).reduce((acc, d) => +acc + (+d.amount), 0)

    return (<>
            <ul className="items-center">
                {debts.map((debt) => (
                <li key={debt._id}>
                    <h2>
                    Deuda: {debt._id} {debt.concept} ({debt.amount} €) (pagada: {debt.isPaid.toString()}) 
                    <button onClick={() => props.handleRemove(debt._id)} className="ml-2 mt-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Borrar</button>
                    </h2>
                </li>
                ))}
            </ul>
            <div className="m-4 items-center">TOTAL: {sum} €</div>
        </>
    )

}

export default Debts