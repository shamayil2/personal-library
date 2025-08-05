import NavBar from "../components/NavBar"
import {useContext,useState} from "react"
import {BookContext} from "../contexts/BookContext"
export default function AllBooks(){
    const {books,setBooks} = useContext(BookContext)
    const [booksView,setBooksView] = useState([...books])

    function markStatus(param){
        const book = books.find((book)=>book.title==param)
        const readStatus = book.read;
        book.read = !readStatus;
       setBooks([...books])
       localStorage.setItem("booksArr",JSON.stringify(books))
    }
    function deleteBook(param){
        const bookToDlt = books.filter(book=>book.title==param);
        const bookToDltIdx = books.indexOf(bookToDlt[0])
        books.splice(bookToDltIdx,1);
        setBooks([...books])
        setBooksView([...books])
        localStorage.setItem("booksArr",JSON.stringify(books))

    }
    function readBooks(){
        setBooksView(books.filter(book=>book.read))
        
    }

    function unreadBooks(){
        setBooksView(books.filter(book=>!book.read))
        
    }

    return(
        <>
        <NavBar/>
        <div className="container">
        <h1 className="text-center my-4" style={{color:"purple"}}>List of all books</h1>
        <h6 className="text-center my-4">Filter By : </h6>
        <div className="text-center">
        <button onClick={()=>setBooksView([...books])}  className="btn btn-secondary mx-2">All Books ({books.length})</button>
        <button onClick={()=>readBooks()} className="btn btn-secondary mx-2">Read Books ({books.filter(book=>book.read).length})</button>
        <button onClick={()=>unreadBooks()} className="btn btn-secondary mx-2">Unread Books ({books.filter(book=>!book.read).length})</button>
        </div>
        
        <div className="text-center">
            <div className="row">

           
            {booksView.map((book)=>(
                <>
                <div className="my-4 col-md-4 text-center">
                   <h3>{book.title}</h3>
                  <p>Author: {book.author}</p> 
                  <span style={{backgroundColor:"lightgreen",padding:"6px"}}>{book.read?"Read":"Unread"}</span>
                  <button onClick={(param)=>markStatus(book.title)} style={{backgroundColor:"lightyellow",padding:"4px",marginLeft:"8px"}}>Mark as {book.read?"Unread":"Read"}</button><br />
                  <button onClick={(param)=>deleteBook(book.title)} className="btn btn-danger my-4">Delete Book</button>
                </div>
               
                </>
            ))}
             </div>
        </div>
        </div>
            
        </>
    )

}