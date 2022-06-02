// Comenzar en mayuscula
// exportarlo : export default
// importarlo en App o en otro archivo
// y mostrar la navBar en App --->   <NavBar/>

import "./NavBar.css"

function NavBar() {
    return (
        <nav className="nav-main">
            <ul>
                <li>Categoria A </li>
                <li>Categoria B </li>
                <li>Categoria C </li>
            </ul>
        </nav>
    )
}

export default NavBar;