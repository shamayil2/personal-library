import NavBar from "../components/NavBar"
import {useState,useContext} from "react"
import {BookContext} from "../contexts/BookContext"
export default function AddBook(){
    const {books,setBooks} = useContext(BookContext) 
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("")
    const [status,setStatus] = useState("")
    const [bookAdded,setBookAdded] = useState(false)
    console.log(books)
    function addBook(event){
        event.preventDefault()
        const bookObj = {title:title,author:author,status:status,read:status=="Read"?true:false}
        setBooks([...books,bookObj])
        const booksLocal =localStorage.getItem("booksArr") ?  JSON.parse(localStorage.getItem("booksArr")) : []
        localStorage.setItem("booksArr",JSON.stringify([...booksLocal,bookObj]));
        setTitle("")
        setAuthor("")
        setStatus("")
        setBookAdded(true)
    }
    const booksLocal = JSON.parse(localStorage.getItem("booksArr"))
    console.log(booksLocal)

    return(
        <>
        <NavBar/>
        <div className="container text-center">
            <h1>Add New Book</h1>
            <form action="" className="py-4">
                <label className="m-4  " htmlFor="">Title:</label>
                <input value={title} type="text" onChange ={(event)=>setTitle(event.target.value)}/><br />
                <label  className="m-4 " htmlFor="">Author:</label>
                <input value={author} type="text" onChange={(event)=>setAuthor(event.target.value)}/><br />
                <label className="m-4" htmlFor="" >Status:</label>
                <input checked={status=="Read"}  name="status" value="Read"  type="radio" onChange={(event)=>setStatus(event.target.value)}/>Read
                <input checked={status=="Unread"}  name="status" value="Unread" style={{marginLeft:"10px"}} type="radio" onChange={(event)=>setStatus(event.target.value)}/>Unread<br/>
                <button className="btn btn-success" onClick={(event)=>addBook(event)}>Add Book</button>
                
            </form>
            {bookAdded && <p>Book Added ! </p>}
        </div>
        </>
    )

}