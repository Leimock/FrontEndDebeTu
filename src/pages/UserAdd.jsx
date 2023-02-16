import useUsersAdd from "../hooks/useUsersAdd"

const SignUp = () => {

    
    const {user, error, handleSubmit, handleChange} = useUsersAdd()

    return (
        <>
            <h1 className="flex flex-col mb-6">Registrarse</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" name="name" value={user.name} onChange={handleChange}/>
                <input type="email  " name="email" value={user.email} onChange={handleChange}/>
                <input type="password" name="password" value={user.password} onChange={handleChange}/>
                <button type="submit" className="border-red-200">Enviar</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    )

}

export default SignUp