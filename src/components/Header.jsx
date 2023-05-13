import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '40px' }}>
        Library Management System
      </h1>
      <hr></hr>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          fontSize: '20px',
        }}
      >
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Home Page
          </Link>
        </li>
        <li>
          <Link to="/books" style={{ textDecoration: 'none' }}>
            Books
          </Link>
        </li>
        <li>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            Users
          </Link>
        </li>
      </ul>
      <hr></hr>
    </div>
  )
}
