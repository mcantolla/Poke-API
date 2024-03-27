import { NavLink } from "react-router-dom"

function Navbar() {

    return (
      <nav>
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/pokemon'>Pokemones</NavLink>
            </li>
        </ul>      
      </nav>
    )
}

export default Navbar