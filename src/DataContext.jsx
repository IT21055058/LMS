import React, { createContext, useState, useReducer } from 'react'

export const DataContext = createContext(null)

export const DataContextProvider = ({ children }) => {
  //   const [userInfo, setUserInfo] = useState(null);
  //   const [isAuth, setIsAuth] = useState(false);

  //   const login = () => {
  //     fetch("/login").then((res) => {
  //       setIsAuth(true);
  //       setUserInfo(res.user);
  //     });
  //   };

  //   const logout = () => {
  //     fetch("/logout").then((res) => {
  //       setIsAuth(false);
  //       setUserInfo(null);
  //     });
  //   };

  const deleteData = () => {}

  const initialState = {
    books: [
      { bId: '1', bName: 'abc', borrowedBy: '1' },
      { bId: '2', bName: 'Harry Potter', borrowedBy: '2' },
      { bId: '3', bName: 'Atomic Habits', borrowedBy: '3' },
      { bId: '4', bName: '1984', borrowedBy: '' },
      { bId: '5', bName: 'Mockingbird', borrowedBy: '' },
      { bId: '6', bName: 'Brave New World', borrowedBy: '' },
    ],

    users: [
      { uId: '1', uName: 'Samiru' },
      { uId: '2', uName: 'Prathila' },
      { uId: '3', uName: 'Miyuru' },
    ],
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_BOOK':
        return { ...state, books: [...state.books, action.payload] }
      case 'EDIT_BOOK':
        return {
          ...state,
          books: state.books.map((book) =>
            book.bId === action.payload.bId ? action.payload : book
          ),
        }
      case 'DELETE_BOOK':
        return {
          ...state,
          books: state.books.filter((book) => book.bId !== action.payload),
        }
      case 'BORROW_BOOK':
        return {
          ...state,
          books: state.books.map((book) =>
            book.bId === action.payload.bId ? action.payload : book
          ),
        }
      case 'RETURN_BOOK':
        return {
          ...state,
          books: state.books.map((book) =>
            book.bId === action.payload.bId ? action.payload : book
          ),
        }
      //   case 'ADD_USER':
      //     return { ...state, users: [...state.users, action.payload] }
      //   case 'EDIT_USER':
      //     return {
      //       ...state,
      //       users: state.users.map((user) =>
      //         user.id === action.payload.id ? action.payload : user
      //       ),
      //     }
      //   case 'DELETE_USER':
      //     return {
      //       ...state,
      //       users: state.users.filter((user) => user.id !== action.payload),
      //     }
      default:
        return state
    }
  }

  const books = [
    { bId: '1', bName: 'abc' },
    { bId: '2', bName: 'Harry Potter' },
    { bId: '3', bName: 'Atomic Habits' },
    { bId: '4', bName: '1984' },
  ]

  const users = [
    { uId: '1', uName: 'Samiru' },
    { uId: '2', uName: 'Prathila' },
    { uId: '3', uName: 'Miyuru' },
  ]

  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    books,
    users,
    state,
    dispatch,
    // userInfo,
    // setUserInfo,
    // isAuth,
    // setIsAuth,
    // login,
    // logout,
  }

  return <DataContext.Provider value={value}> {children} </DataContext.Provider>
}

export default DataContext
