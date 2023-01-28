import './App.css'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Messages from './components/Messages.jsx'
import Saludo from './components/Saludo'
import NavBar from './components/Navbar'
import Users from './components/UsersList'
import SignUp from './components/UserAdd'
import Login from './components/UserLogin'
import Info from './components/UserInfo'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Saludo />}></Route>
        <Route path="/chat" element={<Messages />}></Route>
        <Route path="/userlist" element={<Users />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/logIn" element={<Login />}></Route>
        <Route path="/myInfo" element={<Info />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
