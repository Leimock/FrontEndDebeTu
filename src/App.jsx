import './App.css'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Messages from './pages/Messages.jsx'
import Saludo from './pages/Saludo'
import NavBar from './components/Navbar'
import Users from './pages/UsersListPage'
import SignUp from './pages/UserAdd'
import Login from './pages/UserLogin'
import Info from './pages/UserInfo'
import Debtors from './pages/MyDebtorsPage'
import Creditors from './pages/MyCreditorsPage'

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
        <Route path="/myDebtors" element={<Debtors />}></Route>
        <Route path="/myCreditors" element={<Creditors />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
