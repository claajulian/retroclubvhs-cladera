// Comenzar en mayuscula
// exportarlo : export default
// importarlo en App o en otro archivo
// y mostrar la navBar en App --->   <NavBar/>


import CartWidget from "./CartWidget";
import "./NavBar.css"


function NavBar() {
    return (
        <nav className="nav-main">
            <ul className="nav-list">
                <a href="/"> Categoria A </a>
                <a href="/"> Categoria B </a>
                <a href="/"> Categoria C </a>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar;