import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarLogo from '../../assets/images/NavbarLogo.svg'
import './Navbar.scss'


export default class Navbar extends Component{

   render(){
      return <header className="navbar">
         <Link to="/">
            <img className="navbar__logo" src={NavbarLogo} alt="logo Kasa" />
         </Link>
         <nav className="navbar__nav">
            <NavLink className="navbar__nav__link" to='/' >Acceuil</NavLink>
            <NavLink className="navbar__nav__link" to='/apropos' >A Propos</NavLink>
         </nav>
   </header>
   }
}
