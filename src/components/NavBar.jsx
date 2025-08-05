import {Link} from "react-router-dom"
const NavBar = () => {

    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" href="#">Books Library</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/books" class="nav-link "  href="#">All Books</Link>
        </li>
        <li class="nav-item">
          <Link to="/addBook" class="nav-link" href="#">Add Book</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </>
    )

}

export default NavBar;