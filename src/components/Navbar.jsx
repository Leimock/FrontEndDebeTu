import { Link } from "react-router-dom"

const NavBar = () => {
    
    return (
        <nav className="flex gap-4 mb-5">
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/userlist">Users</Link>
            <Link to="/signUp">SignUp</Link>
        </nav>
    )

}

export default NavBar