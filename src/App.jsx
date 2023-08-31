import { useEffect, useState } from "react"
import Page2 from "./components/Page2"

function App() {

  const[ data, setData] = useState([])

  const users = () => {
    fetch('https://reqres.in/api/users?page=1')
      .then(res => res.json())
      .then(resUsers => {
          setData(resUsers.data)
      },
      error =>{
        console.log(error)
      }
       )
  }

  useEffect(()=>{
    users()
  },[])

  return (
    <>
    <ul>
      Peticiones Fetch:
      {data.map(usuario => {
        return <li key={usuario.id}>{usuario.first_name} {usuario.email}</li>
      })}
    </ul>
    <hr />
    <Page2/>
    </>
  )
}

export default App
