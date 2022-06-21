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
               <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                     <Link href="/item"> Movies </Link>
                </li>
                <li>
                    <Link href="/category/terror"> Terror </Link>
                </li>
                <CartWidget />
                
            </ul>
        </nav>
    )
}

export default NavBar;