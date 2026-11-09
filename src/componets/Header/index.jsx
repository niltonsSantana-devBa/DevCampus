import { Link, NavLink } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/logo.png'

export function Header(){
    return(
        <header>
            <div>
                <Link to="/">
                <img src= {logo} alt="Logo" />
                <span>Facudade Horizonte</span>
                </Link>

                <nav>
                    <NavLink to="/">Home</NavLink>
                </nav>
            </div>
        </header>
    )
}