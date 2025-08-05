import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {BookContext} from "./contexts/BookContext"
import './App.css'
import BookProvider from "./contexts/BookContext"
import Home from "./pages/Home"
import AllBooks from "./pages/AllBooks"
import AddBook from "./pages/AddBook"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
    <BookProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<AllBooks/>}/>
        <Route path="/addBook" element={<AddBook/>}/>
      </Routes>
      </BookProvider>
      </BrowserRouter>
    </>
  )
}

export default App
