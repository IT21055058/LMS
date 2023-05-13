import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../DataContext.jsx'
import '../table.css'
import '../form.css'

export default function SingleBook() {
  const { id } = useParams()
  const { books, state, dispatch } = useContext(DataContext)
  const book = state.books.find((book) => book.bId === id)
  const [update, setUpdate] = useState(false)
  const [borrow, setBorrow] = useState(false)
  const [bname, setName] = useState('')

  let optionItems = state.users.map((item) => (
    <option key={item.uId}>{item.uName}</option>
  ))

  const handleUpdate = (event) => {
    event.preventDefault()
    const updateBook = { bId: book.bId, bName: bname }
    dispatch({ type: 'EDIT_BOOK', payload: updateBook })
  }

  function handleReturnBook() {
    const updateBook = { bId: book.bId, bName: book.bname, borrowedBy: '' }
    dispatch({ type: 'EDIT_BOOK', payload: updateBook })
  }

  return (
    <div className="column">
      {update ? (
        <h1>
          <div className="column add_data">
            <form onSubmit={handleUpdate}>
              <label>
                {' '}
                Book ID:
                <input
                  type="text"
                  placeholder="Enter book ID"
                  editable={false}
                  value={book.bId}
                  readOnly
                ></input>
              </label>
              <label>
                {' '}
                Book ID:
                <input
                  type="text"
                  placeholder={book.bName}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </label>

              <input type="submit" value="Update"></input>
            </form>
          </div>
        </h1>
      ) : !borrow ? (
        <>
          <div className="column add_data">
            <form>
              <label>
                {' '}
                Book ID:
                <input
                  type="text"
                  placeholder="Enter book ID"
                  editable={false}
                  value={book.bId}
                  readOnly
                ></input>
              </label>
              <label>
                {' '}
                Book ID:
                <input
                  type="text"
                  placeholder="Enter USer ID"
                  editable={false}
                  value={book.bName}
                  readOnly
                ></input>
              </label>
              <label>
                {' '}
                Borrowed By:
                <input
                  type="text"
                  editable={false}
                  value={book.borrowedBy}
                  readOnly
                ></input>
              </label>

              {/* <input type="submit" value="Submit"></input> */}
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="column add_data">
            <form>
              <label>
                {' '}
                Book ID:
                <input
                  type="text"
                  placeholder="Enter book ID"
                  editable={false}
                  value={book.bId}
                  readOnly
                ></input>
              </label>
              <label>
                {' '}
                Book ID:
                <input
                  type="text"
                  placeholder="Enter USer ID"
                  editable={false}
                  value={book.bName}
                  readOnly
                ></input>
              </label>
              <label>
                {' '}
                Borrowed By:
                <select>{optionItems}</select>
              </label>

              {/* <input type="submit" value="Submit"></input> */}
            </form>
          </div>
        </>
      )}
      <button onClick={() => setUpdate((current) => !current)}>
        {update ? 'Cancel' : 'Update'}
      </button>
      {book.borrowedBy != '' ? (
        <button onClick={handleReturnBook}>Return Book</button>
      ) : (
        <button onClick={() => setBorrow((current) => !current)}>
          Borrow Book
        </button>
      )}
    </div>
  )
}
