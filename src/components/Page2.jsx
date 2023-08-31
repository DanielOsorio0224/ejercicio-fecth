import { useEffect, useState } from "react"

export default function Page2() {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(user => {
                setUsers(user.data)
            })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                {users.map(user => {
                    return (
                        <tbody key={user.id}>
                            <tr>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td><img src={user.avatar} alt="avatar" /></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}
