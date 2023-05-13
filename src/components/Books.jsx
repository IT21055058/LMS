import React, { useContext, useState } from 'react'
import DataContext from '../DataContext.jsx'
import { Link } from 'react-router-dom'
import '../table.css'
import '../form.css'

export default function Books() {
  const { books, state, dispatch } = useContext(DataContext)
  const [bid, setId] = useState('')
  const [bname, setName] = useState('')

  function deleteBook(id) {
    dispatch({ type: 'DELETE_BOOK', payload: id })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newBook = { bId: parseInt(bid), bName: bname }
    dispatch({ type: 'ADD_BOOK', payload: newBook })
  }
  return (
    <div className="row">
      <div className="column">
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.books.map((book) => (
              <tr key={book.bId}>
                <td>{book.bId}</td>
                <td>{book.bName}</td>
                <td>
                  <Link to={`/books/${book.bId}`}>
                    <button>View</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteBook(book.bId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Book */}

      <div className="column add_data">
        <form onSubmit={handleSubmit}>
          <label>
            {' '}
            Book ID:
            <input
              type="text"
              placeholder="Enter book ID"
              onChange={(e) => setId(e.target.value)}
            ></input>
          </label>
          <label>
            {' '}
            Book ID:
            <input
              type="text"
              placeholder="Enter Book Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  )
}
