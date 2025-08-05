import {createContext} from "react"
import {useState} from "react"
const BookContext = createContext();

const BookProvider = ({children}) => {
 const booksLocal = localStorage.getItem("booksArr")?JSON.parse(localStorage.getItem("booksArr")): []   
 const [books,setBooks] =useState([...booksLocal]);
 return (
 <>
 <BookContext.Provider value={{books:books,setBooks}}>
    {children}
</BookContext.Provider>
</>
)


}


export {BookContext};
export default BookProvider;
