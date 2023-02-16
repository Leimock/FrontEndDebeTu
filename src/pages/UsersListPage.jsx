import useUsers from "../hooks/useUsers"

const Users = () => {

    const {users, loading, error} = useUsers()

    if (error) return <div>Error {error}</div>
    if (loading) return <div>Loading...</div>
    if (!users.length) return <div>No hay usuarios</div>

    return (
        <>
            <h1>Lista de usuarios ({users.length})</h1>
            <div>{users.map(user => 
                <div key={user._id}>
                    <div>- {user.name}</div>
                    <div>- {user.email}</div>
                    <br />
                </div>
            )}
            </div>
        </>
    )
}

export default Users