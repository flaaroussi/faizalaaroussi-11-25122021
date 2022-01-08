import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'


export default class AnnonceCard extends Component{

      render(){
         const{id, titre, cover} = this.props
         return <article  className="logement-card">
               <Link to={'/annonce/' + id}>
                  <div className="logement-card__overlay"></div>
                  <img className="logement-card__img" src={cover} alt="logement" />
                  <h2 className="logement-card__titre">{titre}</h2>
               </Link>
         </article>
      }
   
}