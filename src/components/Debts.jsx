const Debts = (props) => {

    const debts = props.debt
    const sum = debts.filter(d => !d.isPaid).reduce((acc, d) => acc + d.amount, 0)

    if (!debts.length) return 'No hay deudas'

    return (<>
            <ul>
                {debts.map((debt) => (
                <li key={debt._id}>
                    <h2>
                    Deuda: {debt.concept} ({debt.amount}) ({debt.isPaid.toString()})
                    </h2>
                </li>
                ))}
            </ul>
            <div>TOTAL: {sum}</div>
        </>
    )

}

export default Debts