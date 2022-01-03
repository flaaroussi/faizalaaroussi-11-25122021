import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'


export default class AnnonceCard extends Component{

      render(){
         const{id, titre, cover} = this.props
         return <article  className="logement">
               <Link to={'/annonce/' + id}>
                  <img className="logement__img" src={cover} alt="logement" />
                  <h2 className="logement__titre">{titre}</h2>
               </Link>
         </article>
      }
   
}