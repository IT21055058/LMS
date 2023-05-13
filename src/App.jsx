import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Books from './components/Books.jsx'
import Users from './components/Users'
import SingleBook from './components/SingleBook'
import { DataContextProvider } from './DataContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DataContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
          <Route path="/books/:id" element={<SingleBook />} />
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  )
}

export default App
