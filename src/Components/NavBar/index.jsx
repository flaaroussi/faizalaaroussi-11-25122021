import { Component } from "react";
import { Link } from "react-router-dom";
import './NavBar.scss'

export default class NavBar extends Component{

   render(){
      return <nav>
        <ul>
           <li><Link to='/' >Acceuil</Link></li>
           <li><Link to='/apropos' >A Propos</Link></li>
        </ul>
      </nav>
   }
} 