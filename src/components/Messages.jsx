import { useState,useEffect } from "react"
import { fetchAllMessages, addNewMessage } from "../services/messageServices"

const Messages = () => {
    
    const [messages, setMessages] = useState([])
    
    const [msg, setMsg] = useState("")

    async function peticion() {
        const json = await fetchAllMessages()
        setMessages(json)
    }

    useEffect( () => {
        peticion()
    }, [])

    useEffect( () => {

        setInterval( () => peticion() , 2000)

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const newMessage = await addNewMessage({msg})

        console.log(newMessage)
        // messages.push(newMessage)
        setMessages([...messages, newMessage])
        setMsg("")
    }

    return (
        <>
            <h1>Lista de mensajes del chat</h1>
            <div>{messages.map(message => 
                <div key={message._id}>{message.msg}</div>)}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="msg" value={msg} onChange={ (e) => setMsg(e.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Messages