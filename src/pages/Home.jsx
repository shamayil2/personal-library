import NavBar from "../components/NavBar"
import {Link} from "react-router-dom"
export default function Home(){

    return(
        <>
        <NavBar/>
        <h1 className="text-center py-4">Your Own Personal Library </h1>
        <h2 className="text-center py-4">Click Below to start!</h2>
         
          <Link to="/books" class="nav-link text-center"  href="#"><button className="btn btn-primary my-4">All Books</button></Link>
       
        
          <Link to="/addBook" class="nav-link text-center" href="#"><button className="btn btn-primary my-4">Add Book</button></Link>
       
        </>
    )
}