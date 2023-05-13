import React, { useContext } from 'react'
import DataContext from '../DataContext.jsx'
import '../table.css'

export default function Home() {
  const { books, users } = useContext(DataContext)
  return (
    <div>
      <h1>this is home</h1>

      <div className="row">
        {/* Books Table */}
        <div className="column">
          <table>
            <thead>
              <tr>
                <th>Book ID</th>
                <th>Book Name</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.bId}>
                  <td>{book.bId}</td>
                  <td>{book.bName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Users table */}
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
    </div>
  )
}
