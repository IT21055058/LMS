import React, { useContext } from 'react'
import DataContext from '../DataContext.jsx'
import '../table.css'

export default function Users() {
  const { books, users } = useContext(DataContext)
  return (
    <div>
      <div className="column">
        <table>
          <thead>
            <tr>
              <th>Users ID</th>
              <th>Users Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.uId}>
                <td>{user.uId}</td>
                <td>{user.uName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
