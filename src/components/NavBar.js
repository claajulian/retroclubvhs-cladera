// Comenzar en mayuscula
// exportarlo : export default
// importarlo en App o en otro archivo
// y mostrar la navBar en App --->   <NavBar/>


import CartWidget from "./CartWidget";
import "./NavBar.css"
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav className="nav-main">
            <ul className="nav-list">
                <a href="/"> Home </a>
                <Link to="/"> Home </Link>
                <Link href="/detalle"> Detalle </Link>
                <a href="/"> Categoria B </a>
                <CartWidget />
            </ul>
        </nav>
    )
}

export default NavBar;